"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    id: "ecommerce-tma",
    title: "E-commerce TMA",
    category: "Telegram Mini App",
    description: "Full shop inside Telegram with seamless payments, user accounts, and real-time order tracking.",
    span: "md:col-span-2 lg:col-span-3",
  },
  {
    id: "corporate-pwa",
    title: "Corporate PWA",
    category: "Progressive Web App",
    description: "High-performance offline-first portal tailored for a national logistics company.",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    category: "LLM Integration",
    description: "Lead generation bot powered by GPT-4 for a premium real estate agency, increasing conversion by 40%.",
    span: "md:col-span-3 lg:col-span-4",
  },
];

const technologies = [
  "Next.js 14",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Python",
  "FastAPI",
  "OpenAI API",
  "Telegram API",
];

export function Cases() {
  return (
    <section id="cases" className="py-24 max-w-6xl mx-auto px-6 relative z-10">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 text-[#1D1D1F]">
          Избранные <span className="text-secondary">кейсы</span>
        </h2>
        <p className="text-lg text-secondary max-w-2xl font-medium">
          Реальные бизнес-задачи, решенные с помощью современных веб-технологий и ИИ.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
        {cases.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`liquid-glass p-8 md:p-10 rounded-[2rem] cursor-pointer group transition-colors hover:bg-white/60 flex flex-col justify-between min-h-[320px] ${project.span}`}
          >
            <div>
              <div className="text-xs font-mono text-accent uppercase tracking-widest mb-6">
                {project.category}
              </div>
              <h3 className="text-2xl md:text-4xl font-semibold mb-4 tracking-tighter text-[#1D1D1F] group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-secondary/90 leading-relaxed font-medium max-w-lg">
                {project.description}
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-[#1D1D1F] group-hover:text-accent transition-colors">
              <span>Смотреть проект</span>
              <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Ticker / Grid */}
      <div className="pt-16 border-t border-black/5">
        <h3 className="text-sm font-mono text-secondary uppercase tracking-widest mb-8 text-center">
          Технологический стек
        </h3>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {technologies.map((tech) => (
            <div 
              key={tech}
              className="px-4 py-2 rounded-lg bg-black/[0.03] border border-black/[0.05] text-sm font-mono text-[#1D1D1F]/80 hover:bg-black/[0.05] transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
