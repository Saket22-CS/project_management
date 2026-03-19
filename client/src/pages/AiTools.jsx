import React from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  FileText,
  Image,
  Wand2,
  Eraser,
  Users,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Layers,
  Zap,
  Monitor,
} from "lucide-react";

const AIToolsPage = () => {
  const handleRedirect = () => {
    window.location.href = "https://quick-ai-6ltt.vercel.app/ai";
  };

  const tools = [
    { icon: FileText, title: "Write Article",             desc: "Generate high-quality AI articles instantly.", tag: "Content",   tagColor: "bg-zinc-200 text-zinc-800 dark:bg-zinc-600 dark:text-zinc-200"       },
    { icon: FileText, title: "Blog Titles",               desc: "Create catchy and SEO-friendly titles.",        tag: "Content",   tagColor: "bg-zinc-200 text-zinc-800 dark:bg-zinc-600 dark:text-zinc-200"       },
    { icon: Image,    title: "Generate Images",           desc: "Turn prompts into stunning visuals.",           tag: "Image",     tagColor: "bg-blue-200 text-blue-800 dark:bg-blue-500 dark:text-blue-900"       },
    { icon: Eraser,   title: "Remove Background",         desc: "Instantly remove image backgrounds.",           tag: "Image",     tagColor: "bg-blue-200 text-blue-800 dark:bg-blue-500 dark:text-blue-900"       },
    { icon: Wand2,    title: "Remove Object",             desc: "Erase unwanted objects from images.",           tag: "Image",     tagColor: "bg-blue-200 text-blue-800 dark:bg-blue-500 dark:text-blue-900"       },
    { icon: Users,    title: "Community & Resume Review", desc: "Get feedback and improve your resume.",         tag: "Community", tagColor: "bg-emerald-200 text-emerald-800 dark:bg-emerald-500 dark:text-emerald-900" },
  ];

  // Exact same shape/classes as StatsGrid
  const statCards = [
    { icon: Layers,      title: "Total Tools",     value: 6,       subtitle: "available to use",     bgColor: "bg-purple-500/10",  textColor: "text-purple-500"  },
    { icon: Users,       title: "Active Users",    value: "10k+",  subtitle: "on Cognify platform",  bgColor: "bg-blue-500/10",    textColor: "text-blue-500"    },
    { icon: CheckCircle, title: "Tasks Completed", value: "50k+",  subtitle: "AI tasks processed",   bgColor: "bg-emerald-500/10", textColor: "text-emerald-500" },
    { icon: Zap,         title: "Uptime",          value: "99.9%", subtitle: "platform reliability", bgColor: "bg-amber-500/10",   textColor: "text-amber-500"   },
  ];

  return (
    <div className="w-full min-h-screen px-6 py-6 text-white">
      <div className="w-full max-w-6xl mx-auto">

        {/* PAGE HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              AI Tools
            </h1>
            <p className="text-sm text-gray-400 mt-0.5">
              Powerful tools to create content, edit images, and boost productivity.
            </p>
          </div>
          <button
            onClick={handleRedirect}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 transition px-4 py-2 rounded-lg text-sm font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            Open Cognify AI
          </button>
        </div>

        {/* STAT CARDS — exact StatsGrid classes & structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-9">
          {statCards.map(({ icon: Icon, title, value, subtitle, bgColor, textColor }, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-950 dark:bg-gradient-to-br dark:from-zinc-800/70 dark:to-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition duration-200 rounded-md"
            >
              <div className="p-6 py-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">{title}</p>
                    <p className="text-3xl font-bold text-zinc-800 dark:text-white">{value}</p>
                    {subtitle && (
                      <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">{subtitle}</p>
                    )}
                  </div>
                  <div className={`p-3 rounded-xl ${bgColor} bg-opacity-20`}>
                    <Icon size={20} className={textColor} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TWO COLUMN LAYOUT — matching dashboard bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── AVAILABLE TOOLS — ProjectOverview card pattern ── */}
          <div className="bg-white dark:bg-zinc-950 dark:bg-gradient-to-br dark:from-zinc-800/70 dark:to-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="border-b border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between">
              <h2 className="text-md text-zinc-800 dark:text-zinc-300">Available Tools</h2>
              <button
                onClick={handleRedirect}
                className="text-sm text-zinc-600 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 flex items-center"
              >
                View all <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Tool rows — same divide + hover as ProjectOverview project rows */}
            <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  onClick={handleRedirect}
                  className="block p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      {/* Icon box matches the empty-state icon style */}
                      <div className="w-8 h-8 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center flex-shrink-0">
                        <tool.icon size={15} className="text-zinc-600 dark:text-zinc-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-zinc-800 dark:text-zinc-300 text-sm mb-0.5">
                          {tool.title}
                        </h3>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">{tool.desc}</p>
                      </div>
                    </div>
                    {/* Tag badge — same shape as status badge in ProjectOverview */}
                    <span className={`text-xs px-2 py-1 rounded ml-4 flex-shrink-0 ${tool.tagColor}`}>
                      {tool.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── PLATFORM PREVIEW — ProjectOverview card pattern ── */}
          <div className="bg-white dark:bg-zinc-950 dark:bg-gradient-to-br dark:from-zinc-800/70 dark:to-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 rounded-lg overflow-hidden flex flex-col">
            {/* Header */}
            <div className="border-b border-zinc-200 dark:border-zinc-800 p-4 flex items-center justify-between">
              <h2 className="text-md text-zinc-800 dark:text-zinc-300">Platform Preview</h2>
              <span className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
                <Monitor size={12} /> Real-time experience
              </span>
            </div>

            {/* Image area */}
            <div className="p-6 flex flex-col flex-1">
              <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden flex-1 flex items-center justify-center">
                <img
                  src="/homepage.png"
                  alt="Cognify AI Preview"
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>

              {/* Meta row — mimics the members/date row in ProjectOverview */}
              <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500 mt-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Users size={12} />
                    10k+ users
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={12} />
                    50k+ tasks
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded bg-emerald-200 text-emerald-800 dark:bg-emerald-500 dark:text-emerald-900">
                  Active
                </span>
              </div>

              {/* CTA button */}
              <button
                onClick={handleRedirect}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gradient-to-br from-blue-500 to-blue-600 text-white dark:text-zinc-200 rounded hover:opacity-90 transition"
              >
                <ExternalLink size={14} />
                Open Cognify AI
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIToolsPage;