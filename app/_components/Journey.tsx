"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

const TIMELINE = [
  {
    id: 1,
    title: "University of Silesia",
    company: "Katowice",
    date: "Present",
    subtitle: "Computer Science · INF.03 & INF.04 Certifications",
    description:
      "Foundations in computer science and algorithmic thinking, building on a technical programming education with 5+ years of self-taught experience.",
    tech: ["Computer Science", "Algorithms", "INF.03", "INF.04"],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "RecodeIT · D9 Space",
    date: "2024",
    subtitle: "Contract · PHP · WordPress",
    bullets: [
      "Designed and implemented the multi-step booking flow for d9space.com.",
      "Integrated the reservation module with WordPress and built an admin interface.",
      "Implemented backend logic for bookings, availability, and data validation.",
    ],
    tech: ["PHP", "WordPress", "Custom Plugins", "Backend"],
  },
  {
    id: 3,
    title: "Full-Stack Intern",
    company: "RecodeIT",
    date: "May 2024",
    subtitle: "Next.js · TypeScript · T3 Stack",
    bullets: [
      "Built and expanded full-stack features using the T3 Stack in a production-oriented project.",
      "Extended an internal employee management panel with leave and holiday management.",
      "Implemented responsive UI components and collaborated during code reviews.",
    ],
    tech: ["Next.js", "TypeScript", "T3 Stack", "Tailwind", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Software Development Intern",
    company: "Hurtopony",
    date: "May 2023",
    subtitle: "PHP · HTML/CSS · MySQL",
    bullets: [
      "Developed a PHP-based reporting system generating operational and logistics reports using real company data.",
      "Designed and optimized MySQL queries to analyze order, delivery, and inventory datasets.",
      "Created internal calculation tools and improved existing scripts for maintainability.",
    ],
    tech: ["PHP", "HTML/CSS", "MySQL", "Reporting"],
  },
] as const;

// Animation variants
const cardVariants = {
  enter: { opacity: 0, y: 20, scale: 0.95 },
  center: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.95 },
};

const contentReveal = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export default function Journey() {
  // Default to most recent role (first in array)
  const [activeId, setActiveId] = useState(1);
  const activeItem = TIMELINE.find((item) => item.id === activeId)!;

  return (
    <section
      id="journey"
      className="section section-journey section-seam relative h-screen flex flex-col justify-center overflow-hidden"
    >
      <FloatingShapes section="journey" />

      {/* Chapter label */}
      <motion.div
        className="absolute top-8 left-8 sm:top-12 sm:left-12 z-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400">
          Ch 2: The Journey
        </p>
      </motion.div>

      {/* ==================== CENTER STAGE: CONTENT CARD ==================== */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-8 pt-16 sm:pt-20 pb-28 sm:pb-32">
        {/* Ambient glow behind card */}
        <motion.div
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          key={`glow-${activeId}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-3xl h-64 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,_rgba(124,71,230,0.12),_transparent_60%)]" />
        </motion.div>

        {/* Glassmorphism card */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={activeId}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 w-full max-w-2xl lg:max-w-3xl"
          >
            <div
              className="relative rounded-2xl lg:rounded-3xl overflow-hidden
                         border border-primary-500/20
                         bg-surface-900/50 backdrop-blur-xl
                         shadow-[0_8px_64px_-16px_rgba(124,71,230,0.12)]
                         p-7 sm:p-9 lg:p-12"
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-primary-500/40 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-primary-500/40 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-primary-500/40 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-primary-500/40 rounded-br-xl" />

              {/* Header */}
              <motion.div
                variants={contentReveal}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-6 mb-6"
              >
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-base mb-2">
                    {activeItem.title}
                  </h2>
                  <p className="text-base sm:text-lg text-primary-300">{activeItem.company}</p>
                </div>

                {/* Date pill - larger version */}
                <span className="shrink-0 inline-flex items-center rounded-full border border-primary-500/40 bg-primary-700/20 px-4 py-1.5 text-sm font-medium text-primary-300">
                  {activeItem.date}
                </span>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                variants={contentReveal}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.15 }}
                className="text-sm sm:text-base text-text-soft mb-6"
              >
                {activeItem.subtitle}
              </motion.p>

              {/* Description or bullets */}
              <motion.div
                variants={contentReveal}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                {"description" in activeItem && activeItem.description ? (
                  <p className="text-sm sm:text-base text-text-soft leading-relaxed">
                    {activeItem.description}
                  </p>
                ) : "bullets" in activeItem && activeItem.bullets ? (
                  <ul className="space-y-3">
                    {activeItem.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-text-soft">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(179,140,255,0.5)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </motion.div>

              {/* Tech stack tags */}
              <motion.div
                variants={contentReveal}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-2 pt-6 border-t border-border-subtle/30"
              >
                {activeItem.tech.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full
                               border border-primary-600/30 bg-primary-900/20
                               text-xs font-medium uppercase tracking-wider text-primary-200"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* ==================== BOTTOM: HORIZONTAL TIMELINE TRACK ==================== */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 right-0 h-28 sm:h-32 flex items-end justify-center pb-6 sm:pb-8 z-20">
        <div className="w-full max-w-4xl px-4 sm:px-8">
          {/* Timeline nodes container */}
          <div className="relative flex items-center justify-between gap-2 sm:gap-4" id="timeline-track">
            {/* Horizontal base line - clean uniform color */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -z-10" />

            {/* Progress line fill - solid neon purple, stops exactly at active node center */}
            <motion.div
              className="absolute top-1/2 left-0 h-px bg-primary-500 origin-left -z-10"
              initial={false}
              animate={{
                width: `${(activeId / TIMELINE.length) * 100}%`,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Active node glow - centered behind the pill shape */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 rounded-full bg-primary-500/25 blur-xl -z-10"
              initial={false}
              animate={{
                left: `${((activeId - 1) / (TIMELINE.length - 1)) * 100}%`,
                width: "2rem",
                height: "1.5rem",
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {TIMELINE.map((item, index) => {
              const isActive = item.id === activeId;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className="relative flex flex-col items-center gap-2 sm:gap-3 group outline-none p-4 -mx-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Date label above node */}
                  <span
                    className={`text-[10px] sm:text-xs font-medium uppercase tracking-wider transition-colors duration-300
                                ${isActive ? "text-primary-300" : "text-text-mute group-hover:text-text-soft"}`}
                  >
                    {item.date}
                  </span>

                  {/* Node container - pill shape when active */}
                  <div className="relative flex items-center justify-center">
                    {/* The node - animates between circle and slightly wider pill */}
                    <motion.span
                      className={`relative rounded-full border-2 flex items-center justify-center
                                  ${isActive ? "border-primary-400 bg-primary-500 shadow-[0_0_16px_rgba(124,71,230,0.5)]" : "border-primary-700 bg-bg-900 group-hover:border-primary-500"}`}
                      initial={false}
                      animate={{
                        width: isActive ? "1.5rem" : "1rem",
                        height: "1rem",
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      {/* Inner dot - visible on all, brighter when active */}
                      <span
                        className={`rounded-full transition-all duration-300
                                    ${isActive ? "w-1 h-1 bg-primary-200" : "w-1.5 h-1.5 bg-primary-600/50"}`}
                      />
                    </motion.span>
                  </div>

                  {/* Role title below node (only show on active or hover) */}
                  <motion.span
                    className="absolute -bottom-6 text-[10px] sm:text-xs font-medium text-text-soft whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
