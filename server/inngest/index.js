import { Inngest } from "inngest";
import prisma from "../configs/prisma.js";
import sendEmail from "../configs/nodemailer.js";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "project-management" });


const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-from-clerk'},
    {event: 'clerk/user.created'},
    async ({event}) => {
        const {data} = event
        await prisma.user.create({
            data:{
                id: data.id,
                email: data?.email_addresses[0]?.email_address,
                name: data?.first_name + ' ' + data?.last_name,
                image: data?.image_url,
            }
        })
    }
)

const syncUserDeletion = inngest.createFunction(
    {id: 'delete-user-with-clerk'},
    {event: 'clerk/user.deleted'},
    async ({event}) => {
        const {data} = event
        await prisma.user.delete({
            where:{
                id: data.id,
            }
        })
    }
)

const syncUserUpdation = inngest.createFunction(
    {id: 'update-user-from-clerk'},
    {event: 'clerk/user.updated'},
    async ({event}) => {
        const {data} = event
        await prisma.user.update({
            where:{
                id: data.id,
            },
            data:{
                email: data?.email_addresses[0]?.email_address,
                name: data?.first_name + ' ' + data?.last_name,
                image: data?.image_url,
            }
        })
    }
)

const syncWorkspaceCreation = inngest.createFunction(
    {id: 'sync-workspace-from-clerk'},
    {event: 'clerk/organization.created'},
    async ({event}) => {
        const {data} = event;
        await prisma.workspace.create({
            data:{
                id: data.id,
                name: data.name,
                slug: data.slug,
                ownerId: data.created_by,
                image_url: data.image_url,
            }
        })
        await prisma.workspaceMember.create({
            data:{
                userId: data.created_by,
                workspaceId: data.id,
                role: "ADMIN",
            }
        })
    }
)

const syncWorkspaceUpdation = inngest.createFunction(
    {id: 'update-workspace-from-clerk'},
    {event: 'clerk/organization.updated'},
    async ({event}) => {
        const {data} = event;
        await prisma.workspace.update({
            where:{
                id: data.id,
            },
            data:{
                name: data.name,
                slug: data.slug,
                image_url: data.image_url,
            }
        })
    }
)

const syncWorkspaceDeletion = inngest.createFunction(
    {id: 'delete-workspace-with-clerk'},
    {event: 'clerk/organization.deleted'},
    async ({event}) => {
        const {data} = event;
        await prisma.workspace.delete({
            where:{
                id: data.id,
            }
        })
    }
)

const syncWorkspaceMemberCreation = inngest.createFunction(
    {id: 'sync-workspace-member-from-clerk'},
    {event: 'clerk/organizationInvitation.accepted'},
    async ({event}) => {
        const {data} = event;
        await prisma.workspaceMember.create({
            data:{
                userId: data.user_id,
                workspaceId: data.organization_id,
                role: String(data.role_name).toUpperCase(),
            }
        })
    }
)

const sendTaskAssignmentEmail = inngest.createFunction(
    { id: 'send-task-assignment-email' },
    { event: 'app/task.assigned' },
    async ({ event, step }) => {
        const { taskId, origin } = event.data;

        // Step 1: fetch task and send assignment email
        const task = await step.run('fetch-task-and-send-assignment-email', async () => {
            const task = await prisma.task.findUnique({
                where: { id: taskId },
                include: { assignee: true, project: true }
            });

            await sendEmail({
                to: task.assignee.email,
                subject: `New Task Assignment in ${task.project.name}`,
                body: `<div style="max-width: 600px;">
                       <h2>Hi ${task.assignee.name}, 👋</h2>
                       <p style="font-size: 16px;">You've been assigned a new task:</p>
                       <p style="font-size: 18px; font-weight: bold; color: #007bff; margin: 8px 0;">${task.title}</p>
                       <div style="border:1px solid #ddd; padding: 12px 16px; border-radius: 6px; margin-bottom: 30px;">
                            <p style="margin: 6px 0;"><strong>Description:</strong> ${task.description}</p>
                            <p style="margin: 6px 0;"><strong>Due Date:</strong> ${new Date(task.due_date).toLocaleDateString()}</p>
                       </div>
                       <a href="${origin}" style="background-color: #007bff; padding: 12px 24px; border-radius: 5px; color: #fff; font-weight: 600; font-size: 16px; text-decoration: none;">
                           View Task
                       </a>
                       <p style="margin-top: 20px; font-size:14px; color: #6c757d;">
                           Please make sure to review and complete it before the due date.
                       </p>
                       </div>`
            });

            return task;
        });

        // Step 2: only schedule reminder if due date is in the future
        if (!task.due_date) return;

        const dueDate = new Date(task.due_date);
        const now = new Date();

        if (dueDate <= now) return; // due date already passed, skip reminder

        // Step 3: sleep until due date
        await step.sleepUntil('wait-for-due-date', dueDate);

        // Step 4: re-fetch task and check if still incomplete
        const updatedTask = await step.run('check-if-task-is-completed', async () => {
            return await prisma.task.findUnique({
                where: { id: taskId },
                include: { assignee: true, project: true }
            });
        });

        if (!updatedTask || updatedTask.status === "DONE") return;

        // Step 5: send overdue reminder (flat step, NOT nested)
        await step.run('send-overdue-reminder-email', async () => {
            await sendEmail({
                to: updatedTask.assignee.email,
                subject: `Task Overdue Reminder — ${updatedTask.project.name}`,
                body: `<div style="max-width: 600px;">
                        <h2>Hi ${updatedTask.assignee.name}, 👋</h2>
                        <p style="font-size:16px;">Your task in <strong>${updatedTask.project.name}</strong> is now overdue:</p>
                        <p style="font-size: 18px; font-weight: bold; color: #dc3545; margin: 8px 0;">${updatedTask.title}</p>
                        <div style="border:1px solid #ddd; padding: 12px 16px; border-radius: 6px; margin-bottom: 30px;">
                            <p style="margin: 6px 0;"><strong>Description:</strong> ${updatedTask.description}</p>
                            <p style="margin: 6px 0;"><strong>Due Date:</strong> ${new Date(updatedTask.due_date).toLocaleDateString()}</p>
                        </div>
                        <a href="${origin}" style="background-color: #dc3545; padding: 12px 24px; border-radius: 5px; color: #fff; font-weight: 600; font-size: 16px; text-decoration: none;">
                            View Task
                        </a>
                        <p style="margin-top: 20px; font-size:14px; color: #6c757d;">
                            This task is past its due date. Please complete it as soon as possible.
                        </p>
                        </div>`
            });
        });
    }
);

// Create an empty array where we'll export future Inngest functions
export const functions = [
    syncUserCreation, 
    syncUserDeletion, 
    syncUserUpdation,
    syncWorkspaceCreation,
    syncWorkspaceUpdation,
    syncWorkspaceDeletion,
    syncWorkspaceMemberCreation,
    sendTaskAssignmentEmail
];