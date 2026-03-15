<div align="center">

<br />

```
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   
```

# 🚀 ProJect — Full-Stack Project Management App

**A modern, feature-rich project management platform built for teams who move fast.**

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-project--mgt--ruby.vercel.app-6366f1?style=for-the-badge)](https://project-mgt-ruby.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql)](https://neon.tech/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

<br />

![App Dashboard Preview](https://img.shields.io/badge/Status-Live%20%26%20Deployed-22c55e?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-f59e0b?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-a855f7?style=flat-square)

</div>

---

## 📖 Table of Contents

- [✨ Overview](#-overview)
- [🎯 Live Demo](#-live-demo)
- [🖼️ Features](#️-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Getting Started](#️-getting-started)
- [🔐 Environment Variables](#-environment-variables)
- [🚀 Deployment](#-deployment)
- [📊 Database Schema](#-database-schema)
- [🔌 API Reference](#-api-reference)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Overview

**ProJect** is a full-stack project management application designed to help teams collaborate, organize work, and stay on top of deadlines — all from a single, beautiful interface.

Whether you're managing a startup, running a dev team, or coordinating a side project, ProJect gives you everything you need:

- 🏢 **Multi-workspace support** — manage multiple organizations under one account
- 📋 **Project & task pipelines** — create, assign, and track with precision
- 👥 **Team collaboration** — invite members, set roles, and work together
- 📧 **Smart email notifications** — get notified on task assignments and due date reminders
- 📊 **Analytics & calendar views** — visualize your work, track progress at a glance
- 🌗 **Light & Dark mode** — because good tools respect your preferences

---

## 🎯 Live Demo

> 🌐 **[https://project-mgt-ruby.vercel.app/](https://project-mgt-ruby.vercel.app/)**

Sign up with Google or email to explore the full application. Create a workspace, spin up projects, invite collaborators, and manage tasks — all live.

---

## 🖼️ Features

### 🔐 Authentication & User Management
- Secure sign-up and sign-in via **email or Google OAuth**
- Profile management with avatar support
- Session-based protected routes

### 🏢 Workspace & Organization Management
- Create and switch between multiple **organizations/workspaces**
- Invite team members to workspaces via email
- Role-based access control within workspaces

### 📋 Project Management
- Create, update, and delete **projects** within workspaces
- Add specific members to individual projects
- View project details, team, and associated tasks in one place
- Project settings for name, description, and member management

### ✅ Task Management
- Create detailed tasks with **title, description, status, and priority**
- Assign tasks to specific team members
- Set and track **due dates**
- Update task statuses: `Todo → In Progress → In Review → Done`
- Delete tasks with confirmation

### 💬 Comments & Collaboration
- Add comments to tasks for discussion and updates
- Threaded communication directly on task cards
- Real-time updates on comment submissions

### 📧 Email Notifications
- **Automatic email on task assignment** — assignees get notified instantly
- **Due date reminder emails** — scheduled reminders sent before deadlines
- HTML-formatted, professional email templates

### 📊 Dashboard & Analytics
- Overview stats: total projects, completed projects, assigned tasks, overdue tasks
- **Task Summary** panel with status breakdown
- **Recent Activity** feed across the workspace
- **Project Analytics** with visual charts (Recharts)
- **Calendar view** for date-based task management

### 🎨 UI & Theming
- **Light / Dark mode** toggle
- Fully responsive design for desktop and mobile
- Clean sidebar navigation with workspace context

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **ReactJS 18** | UI framework |
| **Tailwind CSS** | Utility-first styling |
| **Redux Toolkit** | Global state management |
| **React Router DOM** | Client-side routing |
| **Recharts** | Data visualization / analytics charts |
| **Lucide React** | Icon library |
| **React Hot Toast** | Notifications & toasts |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **Express.js** | REST API framework |
| **Prisma ORM** | Database schema & queries |
| **Cors / Dotenv** | Middleware & config |
| **Nodemailer** | Email sending |

### Infrastructure & Services
| Service | Purpose |
|---|---|
| **Neon (Serverless PostgreSQL)** | Primary database |
| **Clerk** | Authentication & organization management |
| **Inngest** | Background jobs, webhooks & email scheduling |
| **Vercel** | Frontend & backend deployment |

---

## 📁 Project Structure

```
📦 project-management-app
┣ 📂 client                          # React Frontend
┃ ┣ 📂 public
┃ ┃ ┗ 📜 favicon.ico
┃ ┣ 📂 src
┃ ┃ ┣ 📂 app
┃ ┃ ┃ ┗ 📜 store.js                  # Redux store configuration
┃ ┃ ┣ 📂 assets                      # Static assets (images, icons)
┃ ┃ ┣ 📂 components                  # Reusable UI components
┃ ┃ ┃ ┣ 📜 AddProjectMember.jsx
┃ ┃ ┃ ┣ 📜 CreateProjectDialog.jsx
┃ ┃ ┃ ┣ 📜 CreateTaskDialog.jsx
┃ ┃ ┃ ┣ 📜 InviteMemberDialog.jsx
┃ ┃ ┃ ┣ 📜 MyTasksSidebar.jsx
┃ ┃ ┃ ┣ 📜 Navbar.jsx
┃ ┃ ┃ ┣ 📜 ProjectAnalytics.jsx
┃ ┃ ┃ ┣ 📜 ProjectCalendar.jsx
┃ ┃ ┃ ┣ 📜 ProjectCard.jsx
┃ ┃ ┃ ┣ 📜 ProjectOverview.jsx
┃ ┃ ┃ ┣ 📜 ProjectSettings.jsx
┃ ┃ ┃ ┣ 📜 ProjectsSidebar.jsx
┃ ┃ ┃ ┣ 📜 ProjectTasks.jsx
┃ ┃ ┃ ┣ 📜 RecentActivity.jsx
┃ ┃ ┃ ┣ 📜 Sidebar.jsx
┃ ┃ ┃ ┣ 📜 StatsGrid.jsx
┃ ┃ ┃ ┣ 📜 TasksSummary.jsx
┃ ┃ ┃ ┗ 📜 WorkspaceDropdown.jsx
┃ ┃ ┣ 📂 configs
┃ ┃ ┃ ┗ 📜 api.js                    # Axios API config
┃ ┃ ┣ 📂 features
┃ ┃ ┃ ┣ 📜 themeSlice.js             # Dark/light mode state
┃ ┃ ┃ ┗ 📜 workspaceSlice.js         # Workspace state & async thunks
┃ ┃ ┣ 📂 pages
┃ ┃ ┃ ┣ 📜 Dashboard.jsx
┃ ┃ ┃ ┣ 📜 Layout.jsx
┃ ┃ ┃ ┣ 📜 ProjectDetails.jsx
┃ ┃ ┃ ┣ 📜 Projects.jsx
┃ ┃ ┃ ┣ 📜 TaskDetails.jsx
┃ ┃ ┃ ┗ 📜 Team.jsx
┃ ┃ ┣ 📜 App.jsx
┃ ┃ ┣ 📜 index.css
┃ ┃ ┗ 📜 main.jsx
┃ ┣ 📜 .env
┃ ┣ 📜 index.html
┃ ┣ 📜 package.json
┃ ┣ 📜 vercel.json
┃ ┗ 📜 vite.config.js
┣ 📂 server                          # Express Backend
┃ ┣ 📂 configs
┃ ┃ ┣ 📜 nodemailer.js               # Email transporter setup
┃ ┃ ┗ 📜 prisma.js                   # Prisma client instance
┃ ┣ 📂 controllers
┃ ┃ ┣ 📜 commentController.js
┃ ┃ ┣ 📜 projectController.js
┃ ┃ ┣ 📜 taskController.js
┃ ┃ ┗ 📜 workspaceController.js
┃ ┣ 📂 inngest
┃ ┃ ┗ 📜 index.js                    # Background job functions
┃ ┣ 📂 middlewares
┃ ┃ ┗ 📜 authMiddleware.js           # Clerk auth protection
┃ ┣ 📂 prisma
┃ ┃ ┗ 📜 schema.prisma               # DB schema
┃ ┣ 📂 routes
┃ ┃ ┣ 📜 commentRoutes.js
┃ ┃ ┣ 📜 projectRoutes.js
┃ ┃ ┣ 📜 taskRoutes.js
┃ ┃ ┗ 📜 workspaceRoutes.js
┃ ┣ 📜 .env
┃ ┣ 📜 package.json
┃ ┣ 📜 server.js
┃ ┗ 📜 vercel.json
┗ 📜 .gitignore
```

---

## ⚙️ Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** v18+
- **npm** or **yarn**
- A **Clerk** account → [clerk.com](https://clerk.com)
- A **Neon** account → [neon.tech](https://neon.tech)
- An **Inngest** account → [inngest.com](https://inngest.com)
- An SMTP provider for emails (e.g., Brevo, Gmail, SendGrid)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Saket22-CS/project_management
cd project-management-app
```

---

### 2. Set Up the Frontend (Client)

```bash
cd client
npm install
```

Create a `.env` file inside `/client`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

The frontend will run at `http://localhost:5173`

---

### 3. Set Up the Backend (Server)

```bash
cd server
npm install
```

Create a `.env` file inside `/server` (see [Environment Variables](#-environment-variables) section below).

Push the database schema to Neon:

```bash
npx prisma db push
npx prisma generate
```

Start the backend server:

```bash
npm run dev
```

The backend will run at `http://localhost:5000`

---

### 4. Start Inngest Dev Server (for background jobs)

In a new terminal:

```bash
npx inngest-cli@latest dev
```

This starts the local Inngest runner, which processes webhook events and scheduled email jobs.

---

## 🔐 Environment Variables

### `/client/.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxx
VITE_BACKEND_URL=http://localhost:5000
```

### `/server/.env`

```env
# Clerk
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxx
CLERK_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxx

# Neon PostgreSQL
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require

# Inngest
INNGEST_EVENT_KEY=xxxxxxxxxxxxxxxxxxxx
INNGEST_SIGNING_KEY=signkey-prod-xxxxxxxxxxxxxxxxxxxx

# Email (SMTP via Brevo / SendGrid / Gmail)
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
EMAIL_FROM=noreply@yourdomain.com
```

> ⚠️ **Never commit your `.env` files.** They are already listed in `.gitignore`.

---

## 🚀 Deployment

This project is deployed using **Vercel** — both frontend and backend are served independently.

### Deploy Frontend

```bash
cd client
vercel --prod
```

Set the environment variables in the Vercel dashboard under your project settings.

### Deploy Backend

```bash
cd server
vercel --prod
```

The `vercel.json` in `/server` configures the Express app as a serverless function.

### Post-Deployment Steps

1. **Update Clerk webhook URL** — Set the Inngest HTTP endpoint as your Clerk webhook URL in the Clerk dashboard.
2. **Sync Inngest** — Deploy Inngest functions to the cloud by visiting the Inngest dashboard and syncing your deployed backend URL.
3. **Update frontend API URL** — Make sure `VITE_BACKEND_URL` in Vercel points to your live backend URL.

---

## 📊 Database Schema

The application uses **Prisma ORM** with a **Neon (PostgreSQL)** database. Key models:

```
User         — Synced from Clerk via webhooks
Workspace    — Represents an organization
Project      — Belongs to a workspace
Task         — Belongs to a project, assigned to a user
Comment      — Belongs to a task
Member       — Join table for workspace/project membership
```

To view or modify the schema:

```
server/prisma/schema.prisma
```

Apply any schema changes:

```bash
npx prisma db push
npx prisma generate
```

---

## 🔌 API Reference

All routes are prefixed with `/api` and protected by Clerk authentication middleware.

### Workspace Routes — `/api/workspace`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get all workspaces for the current user |
| `POST` | `/add-member` | Add a member to a workspace |

### Project Routes — `/api/project`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/create` | Create a new project |
| `PUT` | `/update/:id` | Update project details |
| `POST` | `/add-member` | Add a member to a project |

### Task Routes — `/api/task`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/create` | Create a new task |
| `PUT` | `/update/:id` | Update task details / status |
| `DELETE` | `/delete/:id` | Delete a task |

### Comment Routes — `/api/comment`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/add` | Add a comment to a task |
| `GET` | `/:taskId` | Get all comments for a task |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get involved:

1. **Fork** the repository
2. **Create** a new branch — `git checkout -b feature/your-feature-name`
3. **Commit** your changes — `git commit -m 'feat: add your feature'`
4. **Push** to your branch — `git push origin feature/your-feature-name`
5. **Open a Pull Request**

Please read the `CONTRIBUTING.md` and follow the `CODE_OF_CONDUCT.md` before submitting.

### Ideas for Contributions

- 🔔 Real-time notifications (WebSockets)
- 📎 File attachments on tasks
- 🏷️ Task labels and tagging system
- 🔍 Global search across workspaces
- 📱 Mobile-first responsive improvements
- 🌍 Internationalization (i18n)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE.md](./client/LICENSE.md) file for details.

---

<div align="center">

**Built with ❤️ using the PERN stack**

*ReactJS · Express · Neon PostgreSQL · Node.js*

[![Live Demo](https://img.shields.io/badge/🚀%20Try%20it%20Live-project--mgt--ruby.vercel.app-6366f1?style=for-the-badge)](https://project-mgt-ruby.vercel.app/)

<br />

⭐ **If you found this project useful, consider giving it a star!** ⭐

</div>
