"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Marczelloo Dashboard",
    description:
      "A personal developer dashboard presenting key information in one place — project stats, quick shortcuts and widgets. Showcases multi-widget UI, real-time data and responsive layout design.",
    image: "/avatar_nobg.png",
    tags: ["Next.js", "Dashboard", "APIs"],
    github: "https://github.com/Marczelloo/Marczelloo-dashboard",
    demo: "https://demo-dashboard.marczelloo.dev/projects",
  },
  {
    id: 2,
    title: "AtlasHub",
    description:
      "A web platform designed as a central hub for organizing resources and projects, divided into sections and categories. Focuses on clear navigation, component-driven frontend architecture and app state management.",
    image: "/avatar_nobg.png",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    github: "https://github.com/Marczelloo/atlashub",
    demo: "https://admin-atlashub.marczelloo.dev/landing",
  },
  {
    id: 3,
    title: "BookHaven",
    description:
      "A full-stack online bookstore built with Node.js, Express and MongoDB. Features book browsing, multi-volume management, secure checkout logic and a clean MVC-style backend designed for easy expansion.",
    image: "/avatar_nobg.png",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Marczelloo/BookHaven",
    demo: "https://bookhaven.marczelloo.dev/",
  },
  {
    id: 4,
    title: "NeoBeat Buddy",
    description:
      "A high-performance Discord music bot built with Discord.js, Lavalink and Poru — features slash-only controls, live equaliser presets, queue management, adaptive autoplay and a Docker-ready production stack.",
    image: "/avatar_nobg.png",
    tags: ["Discord.js", "Node.js", "Lavalink"],
    github: "https://github.com/Marczelloo/NeoBeat-Buddy",
    demo: "https://discord.com/invite/szxrjutGBD",
  },

  {
    id: 5,
    title: "CasinoSimulator",
    description:
      "A casino simulator in C# that recreates popular gambling games with a focus on gameplay logic, player state management and odds balancing. Demonstrates object-oriented design and modular game mechanics.",
    image: "/avatar_nobg.png",
    tags: ["C#", "OOP", "Game Logic"],
    github: "https://github.com/Marczelloo/CasinoSimulator",
  },
  {
    id: 6,
    title: "StudyHub",
    description:
      "A study organization app for managing subjects, notes and tasks in one place. Emphasizes student productivity, clean interface and to-do / in-progress / done task state handling.",
    image: "/avatar_nobg.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/Marczelloo/study-hub",
  },
  {
    id: 7,
    title: "Statify",
    description:
      "A lightweight app integrating with the Spotify API to display listening statistics — top artists, tracks and playlists. Demonstrates external API integration, user authentication and data visualization.",
    image: "/avatar_nobg.png",
    tags: ["Spotify API", "Next.js", "OAuth"],
    github: "https://github.com/Marczelloo/statify",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Craft() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="craft"
      className="section section-craft section-seam flex flex-col justify-center py-16 pb-24 sm:py-20 sm:pb-28 md:py-24 md:pb-32 px-4 sm:px-6"
    >
      <FloatingShapes section="craft" />
      <div className="w-full max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Ch 3: The Craft
          </motion.p>

          {/* Carousel nav arrows */}
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <button
              onClick={() => scroll("left")}
              className="grid h-9 w-9 place-items-center rounded-full border border-border-subtle
                         text-text-mute transition-all duration-200 hover:border-primary-600 hover:text-primary-300
                         hover:shadow-[0_0_12px_rgba(179,140,255,0.15)] cursor-pointer"
              aria-label="Scroll left"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="grid h-9 w-9 place-items-center rounded-full border border-border-subtle
                         text-text-mute transition-all duration-200 hover:border-primary-600 hover:text-primary-300
                         hover:shadow-[0_0_12px_rgba(179,140,255,0.15)] cursor-pointer"
              aria-label="Scroll right"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Carousel track */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-none snap-x snap-mandatory"
        >
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative shrink-0 w-72 sm:w-80 md:w-85 snap-start rounded-2xl overflow-hidden
                         border border-border-subtle bg-surface-900/60 backdrop-blur-sm
                         transition-[border-color,box-shadow] duration-300 hover:border-primary-600/50
                         hover:shadow-[0_4px_40px_rgba(179,140,255,0.1)]"
            >
              {/* Shine line on hover */}
              <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary-400/40 to-transparent" />
              </div>

              {/* Image with overlay gradient */}
              <div className="relative h-40 sm:h-48 md:h-52 w-full overflow-hidden bg-surface-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Bottom fade into card */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-surface-900/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 pt-4">
                <h3 className="text-lg font-semibold text-text-base group-hover:text-primary-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-soft line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-subtle/60 bg-surface-800/50 px-2.5 py-0.5
                                 text-xs font-medium uppercase tracking-wider text-text-mute"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-3 flex items-center gap-3 border-t border-border-subtle/40 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="rounded-lg bg-primary-700 px-4 py-1.5 text-xs font-semibold text-white
                                 transition-all hover:bg-primary-600 hover:shadow-[0_0_16px_rgba(179,140,255,0.3)]"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-xs font-semibold text-text-soft transition hover:text-primary-300"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
