"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

// Extended with brand colors for each project's ambient glow
const PROJECTS: (Project & { brandColor: { from: string; to: string } })[] = [
  {
    id: 1,
    title: "Marczelloo Dashboard",
    description:
      "A personal developer dashboard presenting key information in one place — project stats, quick shortcuts and widgets. Showcases multi-widget UI, real-time data and responsive layout design.",
    image: "/projects/marczelloo_dashboard.png",
    tags: ["Next.js", "Dashboard", "APIs"],
    github: "https://github.com/Marczelloo/Marczelloo-dashboard",
    demo: "https://demo-dashboard.marczelloo.dev/projects",
    brandColor: { from: "rgba(139, 92, 246, 0.25)", to: "rgba(139, 92, 246, 0)" }, // Violet
  },
  {
    id: 2,
    title: "AtlasHub",
    description:
      "A web platform designed as a central hub for organizing resources and projects, divided into sections and categories. Focuses on clear navigation, component-driven frontend architecture and app state management.",
    image: "/projects/atlashub.png",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    github: "https://github.com/Marczelloo/atlashub",
    demo: "https://admin-atlashub.marczelloo.dev/landing",
    brandColor: { from: "rgba(34, 211, 238, 0.22)", to: "rgba(34, 211, 238, 0)" }, // Cyan
  },
  {
    id: 3,
    title: "BookHaven",
    description:
      "A full-stack online bookstore built with Node.js, Express and MongoDB. Features book browsing, multi-volume management, secure checkout logic and a clean MVC-style backend designed for easy expansion.",
    image: "/projects/bookhaven.png",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Marczelloo/BookHaven",
    demo: "https://bookhaven.marczelloo.dev/",
    brandColor: { from: "rgba(251, 146, 60, 0.2)", to: "rgba(251, 146, 60, 0)" }, // Amber
  },
  {
    id: 4,
    title: "NeoBeat Buddy",
    description:
      "A high-performance Discord music bot built with Discord.js, Lavalink and Poru — features slash-only controls, live equaliser presets, queue management, adaptive autoplay and a Docker-ready production stack.",
    image: "/projects/neobeatbuddy.png",
    tags: ["Discord.js", "Node.js", "Lavalink"],
    github: "https://github.com/Marczelloo/NeoBeat-Buddy",
    demo: "https://discord.com/invite/szxrjutGBD",
    brandColor: { from: "rgba(168, 85, 247, 0.24)", to: "rgba(168, 85, 247, 0)" }, // Purple
  },
  {
    id: 5,
    title: "CasinoSimulator",
    description:
      "A casino simulator in C# that recreates popular gambling games with a focus on gameplay logic, player state management and odds balancing. Demonstrates object-oriented design and modular game mechanics.",
    image: "/projects/casino_simulator.png",
    tags: ["C#", "OOP", "Game Logic"],
    github: "https://github.com/Marczelloo/CasinoSimulator",
    brandColor: { from: "rgba(236, 72, 153, 0.2)", to: "rgba(236, 72, 153, 0)" }, // Pink
  },
  {
    id: 6,
    title: "StudyHub",
    description:
      "A study organization app for managing subjects, notes and tasks in one place. Emphasizes student productivity, clean interface and to-do / in-progress / done task state handling.",
    image: "/avatar_nobg.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Marczelloo/study-hub",
    brandColor: { from: "rgba(74, 222, 128, 0.2)", to: "rgba(74, 222, 128, 0)" }, // Green
  },
  {
    id: 7,
    title: "Statify",
    description:
      "A lightweight app integrating with the Spotify API to display listening statistics — top artists, tracks and playlists. Demonstrates external API integration, user authentication and data visualization.",
    image: "/avatar_nobg.png",
    tags: ["Spotify API", "Next.js", "OAuth"],
    github: "https://github.com/Marczelloo/statify",
    brandColor: { from: "rgba(34, 197, 94, 0.22)", to: "rgba(34, 197, 94, 0)" }, // Green (Spotify)
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const stageVariants = {
  enter: { opacity: 0, scale: 0.95 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
};

export default function Craft() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringStage, setIsHoveringStage] = useState(false);

  const activeProject = PROJECTS[activeIndex];

  return (
    <section
      id="craft"
      className="section section-craft section-seam relative h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Projects showcase"
    >
      <FloatingShapes section="craft" />

      {/* Chapter label */}
      <motion.div
        className="absolute top-8 left-8 sm:top-12 sm:left-12 z-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400">
          Ch 3: The Craft
        </p>
      </motion.div>

      {/* Main container - split view */}
      <div className="relative z-10 flex h-full w-full flex-col lg:flex-row">
        {/* ==================== INDEX (LEFT) ==================== */}
        <nav
          className="lg:w-80 xl:w-96 flex-shrink-0 flex lg:flex-col overflow-x-auto lg:overflow-x-visible overflow-y-auto
                     border-b lg:border-b-0 lg:border-r border-border-subtle/30
                     bg-bg-900/40 backdrop-blur-sm"
          aria-label="Project navigation"
        >
          <div className="flex lg:flex-col gap-px pt-20 sm:pt-24 px-4 pb-4 lg:p-0 lg:pt-24 lg:pb-12 lg:pl-12 min-w-max lg:min-w-0">
            {PROJECTS.map((project, index) => {
              const isActive = index === activeIndex;
              const numStr = project.id.toString().padStart(2, "0");

              return (
                <motion.button
                  key={project.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex items-center gap-4 lg:gap-5 px-4 py-4 lg:py-5 lg:pr-8
                              rounded-lg lg:rounded-r-xl lg:rounded-l-none transition-all duration-300
                              text-left outline-none
                              ${isActive ? "bg-surface-800/60" : "hover:bg-surface-800/30"}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Number indicator */}
                  <span
                    className={`font-mono text-sm lg:text-base transition-colors duration-300 min-w-[2rem]
                                ${isActive ? "text-primary-400" : "text-text-mute group-hover:text-text-soft"}`}
                  >
                    {numStr}
                  </span>

                  {/* Title */}
                  <span
                    className={`text-sm lg:text-base font-medium truncate max-w-[140px] lg:max-w-[180px]
                                transition-colors duration-300
                                ${isActive ? "text-text-base" : "text-text-soft group-hover:text-text-base"}`}
                  >
                    {project.title}
                  </span>

                  {/* Active indicator bar (desktop) */}
                  <motion.span
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-primary-500 rounded-r-full"
                    initial={false}
                    animate={{ height: isActive ? "2rem" : "0", opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />

                  {/* Active indicator dot (mobile) */}
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="lg:hidden absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </nav>

        {/* ==================== STAGE (RIGHT) ==================== */}
        <main
          className="flex-1 relative flex items-center justify-center p-6 sm:p-8 lg:p-12 overflow-hidden"
          onMouseEnter={() => setIsHoveringStage(true)}
          onMouseLeave={() => setIsHoveringStage(false)}
        >
          {/* Ambient colored glow - shifts with project */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            key={`glow-${activeProject.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_55%_45%,_var(--glow-from),_transparent_60%)]"
              style={{ "--glow-from": activeProject.brandColor.from } as React.CSSProperties}
            />
          </motion.div>

          {/* Stage content container */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={activeProject.id}
              variants={stageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-6 lg:gap-8 items-center"
            >
              {/* Image container with cinematic frame */}
              <motion.div
                className="relative w-full lg:w-[70%] aspect-video rounded-2xl overflow-hidden
                           border border-border-subtle/50 bg-surface-900/60 backdrop-blur-sm
                           shadow-[0_8px_60px_-12px_rgba(0,0,0,0.6)]"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: isHoveringStage ? 1.02 : 1 }}
              >
                {/* Project image */}
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority={activeIndex < 2}
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(5,8,20,0.3)_100%)]" />

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHoveringStage ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Content panel */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                {/* Title with reveal */}
                <motion.h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-base mb-4"
                  custom={0}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  key={`title-${activeProject.id}`}
                >
                  {activeProject.title}
                </motion.h2>

                {/* Description with stagger */}
                <motion.p
                  className="text-sm sm:text-base text-text-soft leading-relaxed mb-6"
                  custom={1}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  key={`desc-${activeProject.id}`}
                >
                  {activeProject.description}
                </motion.p>

                {/* Tech stack badges */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-8"
                  custom={2}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  key={`tags-${activeProject.id}`}
                >
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full
                                 border border-border-subtle/60 bg-surface-800/60
                                 text-xs font-medium uppercase tracking-wider text-text-mute"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Action links */}
                <motion.div
                  className="flex flex-wrap items-center gap-4"
                  custom={3}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  key={`links-${activeProject.id}`}
                >
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                                 bg-primary-700/90 hover:bg-primary-600 text-white text-sm font-semibold
                                 transition-all duration-200 hover:shadow-[0_0_20px_rgba(124,71,230,0.35)]
                                 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg-900"
                      aria-label={`View ${activeProject.title} on GitHub`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  )}

                  {activeProject.demo && (
                    <a
                      href={activeProject.demo}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                                 border border-border-subtle/60 hover:border-primary-500/50
                                 text-text-soft hover:text-primary-300 text-sm font-semibold
                                 transition-all duration-200 hover:bg-surface-800/40
                                 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg-900"
                      aria-label={`View live demo of ${activeProject.title}`}
                    >
                      <span>Live Demo</span>
                      <motion.span
                        animate={{ x: isHoveringStage ? 4 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        &rarr;
                      </motion.span>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Navigation hints - subtle */}
          <motion.div
            className="absolute bottom-6 right-6 lg:bottom-8 lg:right-12 flex items-center gap-3
                       text-text-mute/60 text-xs font-medium uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span>{activeIndex + 1} / {PROJECTS.length}</span>
          </motion.div>
        </main>
      </div>

      {/* Mobile: scroll hint for index */}
      <motion.div
        className="lg:hidden absolute bottom-20 left-8 text-text-mute/40 text-[10px] uppercase tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        &larr; Scroll to explore &rarr;
      </motion.div>
    </section>
  );
}
