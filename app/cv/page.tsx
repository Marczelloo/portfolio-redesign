"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ── CV Data ── */
const PERSONAL = {
  name: "Marcel Moskwa",
  role: "Full-Stack Developer · Next.js & Node.js",
  email: "moskwamarcel@gmail.com",
  location: "Sosnowiec, Poland",
  github: "github.com/Marczelloo",
  linkedin: "linkedin.com/in/marczelloo",
};

const SUMMARY =
  "I'm a full-stack developer currently studying Computer Science at the University of Silesia in Katowice, with over 5 years of programming experience and INF.03 / INF.04 certifications. My journey started with a technical programming education and grew through self-taught exploration and hands-on projects. I enjoy building web applications and bots, primarily working with the Next.js/T3 stack. I'm comfortable across the full stack, from backend logic to frontend UX, and I like experimenting with technologies such as C++ and game development. Currently, I'm focused on deepening my expertise in modern web technologies while staying open to diverse opportunities in full-stack development.";

const EXPERIENCE = [
  {
    title: "Full-Stack Developer (Contract)",
    company: "RecodeIT · D9 Space",
    period: "2024 · Katowice, Poland",
    tech: "PHP, WordPress (Custom Plugins & Backend Logic)",
    bullets: [
      "Worked as a contract full-stack developer at RecodeIT on the reservation system for d9space.com.",
      "Designed and implemented the multi-step booking flow (date, space, layout, features, final submission).",
      "Integrated the module with the client's existing WordPress setup and admin tooling.",
      "Implemented backend logic for bookings, availability and data validation.",
      "Prepared an administration interface for managing bookings and reservations.",
      "Tailored the solution to specific business requirements and workflows.",
    ],
  },
  {
    title: "Full-Stack Intern",
    company: "RecodeIT",
    period: "May 2024 · Katowice, Poland",
    tech: "Next.js, TypeScript, T3 Stack, Tailwind, PostgreSQL, Drizzle ORM",
    bullets: [
      "Built and expanded full-stack features using the T3 Stack as part of my first production-oriented project with this technology.",
      "Extended an internal employee management panel by enhancing the company's leave and holiday management system.",
      "Implemented responsive UI components and improved existing user flows using Tailwind CSS.",
      "Collaborated with developers during code reviews to maintain high code quality and consistency.",
      "Supported deployment workflows and participated in monitoring application performance.",
      "Gained hands-on experience with full-stack architecture, database schema design, and integrating backend logic with modern frontend frameworks.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Hurtopony",
    period: "May 2023 · Sosnowiec, Poland",
    tech: "PHP, HTML/CSS, MySQL",
    bullets: [
      "Developed a PHP-based reporting system that generated operational and logistics reports using real company data.",
      "Designed and optimized MySQL queries to analyze order, delivery, and inventory datasets.",
      "Created internal calculation tools, including a tire replacement calculator and delivery cost calculator.",
      "Improved and refactored existing internal scripts, increasing maintainability and reliability.",
      "Collaborated with staff to adapt reporting tools to daily business needs and workflow requirements.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Computer Science",
    school: "University of Silesia in Katowice",
    period: "Ongoing",
    note: null,
  },
  {
    degree: "Computer Programming",
    school: "Technical School",
    period: "Completed",
    note: null,
  },
  {
    degree: "INF.03 — Web Application Development & DB Admin",
    school: "Certification",
    period: "",
    note: null,
  },
  {
    degree: "INF.04 — Software Development & App Design",
    school: "Certification",
    period: "",
    note: null,
  },
];

const SKILLS = {
  Languages: ["TypeScript", "JavaScript", "PHP", "C++", "SQL"],
  "Web & Frameworks": ["Next.js", "React", "Node.js", "Express", "T3 Stack", "Tailwind CSS"],
  Databases: ["MySQL", "MongoDB", "PostgreSQL", "Drizzle ORM"],
  Other: ["Git", "REST APIs", "WordPress (custom plugins & backend logic)"],
};

const PROJECTS = [
  {
    name: "NeoBeat Buddy",
    tech: "Node.js · Discord.js · Lavalink · Poru · Docker",
    description:
      "High-performance Discord music bot with slash-only controls, live equaliser presets, queue management, adaptive autoplay and a Docker-ready production stack.",
  },
  {
    name: "BookHaven",
    tech: "Node.js · Express · MongoDB",
    description:
      "Full-stack online bookstore with book browsing, multi-volume management, secure checkout logic and a clean MVC-style backend designed for easy expansion.",
  },
  {
    name: "CasinoSimulator",
    tech: "C# · OOP",
    description:
      "Casino simulator recreating popular gambling games with gameplay logic, player state management and odds balancing.",
  },
  {
    name: "AtlasHub",
    tech: "React · TypeScript · Tailwind",
    description:
      "Central hub for organizing resources and projects with clear navigation, component-driven architecture and state management.",
  },
  {
    name: "StudyHub",
    tech: "React · TypeScript",
    description:
      "Study organization app for managing subjects, notes and tasks with to-do / in-progress / done state handling.",
  },
  {
    name: "Statify",
    tech: "Spotify API · React · OAuth",
    description:
      "App integrating with the Spotify API to display listening statistics — top artists, tracks and playlists.",
  },
];

const LANGUAGES = [
  { lang: "Polish", level: "Native" },
  { lang: "English", level: "B2 – Upper Intermediate" },
];

/* ── Component ── */
export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-bg-900 text-text-base">
      {/* Screen-only top bar */}
      <div className="print:hidden sticky top-0 z-50 flex items-center justify-between border-b border-border-subtle bg-bg-900/90 backdrop-blur-md px-4 sm:px-8 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium text-text-soft transition hover:text-primary-300"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <motion.button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-xl bg-primary-700 px-5 py-2 text-sm font-semibold text-white
                       transition-all hover:bg-primary-600 hover:shadow-[0_0_20px_rgba(179,140,255,0.3)] cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z"
              />
            </svg>
            Print / Save PDF
          </motion.button>
        </div>
      </div>

      {/* CV Sheet — A4-like container */}
      <div className="cv-sheet mx-auto my-6 sm:my-10 max-w-208 bg-bg-900 px-6 sm:px-12 md:px-16 py-10 sm:py-14 print:m-0 print:max-w-none print:p-0 print:bg-white print:text-black">
        {/* ── Header ── */}
        <motion.header
          className="mb-8 border-b border-border-subtle pb-6 print:border-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-base print:text-black">
            {PERSONAL.name}
          </h1>
          <p className="mt-2 text-lg sm:text-xl font-medium text-primary-300 print:text-gray-700">{PERSONAL.role}</p>
          <p className="mt-1 text-sm text-text-mute print:text-gray-500">
            Open to internships &amp; junior opportunities
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs sm:text-sm text-text-mute print:text-gray-600">
            <span>{PERSONAL.email}</span>
            <span className="hidden sm:inline text-border-subtle print:text-gray-400">|</span>
            <span>{PERSONAL.location}</span>
            <span className="hidden sm:inline text-border-subtle print:text-gray-400">|</span>
            <a href={`https://${PERSONAL.github}`} className="transition hover:text-primary-300 print:no-underline">
              {PERSONAL.github}
            </a>
            <span className="hidden sm:inline text-border-subtle print:text-gray-400">|</span>
            <a href={`https://${PERSONAL.linkedin}`} className="transition hover:text-primary-300 print:no-underline">
              {PERSONAL.linkedin}
            </a>
          </div>
        </motion.header>

        {/* ── Summary ── */}
        <Section title="Summary" delay={0.1}>
          <p className="text-sm leading-relaxed text-text-soft print:text-gray-700">{SUMMARY}</p>
        </Section>

        {/* ── Experience ── */}
        <Section title="Experience" delay={0.2}>
          <div className="flex flex-col gap-6">
            {EXPERIENCE.map((job, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                  <h3 className="text-base font-semibold text-text-base print:text-black">
                    {job.title} <span className="font-normal text-text-mute print:text-gray-500">— {job.company}</span>
                  </h3>
                  <span className="shrink-0 text-xs font-medium text-primary-300 print:text-gray-600">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-xs font-medium text-text-mute print:text-gray-500">Tech: {job.tech}</p>
                <ul className="mt-2 space-y-1">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-text-soft print:text-gray-700">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-400 print:bg-gray-500" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Education ── */}
        <Section title="Education &amp; Certifications" delay={0.3}>
          <div className="flex flex-col gap-3">
            {EDUCATION.map((edu, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4">
                <div>
                  <h3 className="text-base font-semibold text-text-base print:text-black">{edu.degree}</h3>
                  <p className="text-sm text-text-mute print:text-gray-600">{edu.school}</p>
                </div>
                {edu.period && (
                  <span className="shrink-0 text-xs font-medium text-primary-300 print:text-gray-600">
                    {edu.period}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* ── Skills ── */}
        <Section title="Skills" delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-400 mb-1 print:text-gray-800">
                  {category}
                </h4>
                <p className="text-sm text-text-soft print:text-gray-700">{items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Projects ── */}
        <Section title="Projects" delay={0.5}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROJECTS.map((p, i) => (
              <div
                key={i}
                className="rounded-xl border border-border-subtle/60 bg-surface-900/40 p-4 print:border-gray-300 print:bg-white"
              >
                <h4 className="text-sm font-semibold text-text-base print:text-black">{p.name}</h4>
                <p className="text-xs text-primary-300 print:text-gray-600 mt-0.5">{p.tech}</p>
                <p className="mt-2 text-xs leading-relaxed text-text-soft print:text-gray-700">{p.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Languages ── */}
        <Section title="Languages" delay={0.6}>
          <div className="flex gap-6">
            {LANGUAGES.map((l, i) => (
              <div key={i}>
                <span className="text-sm font-medium text-text-base print:text-black">{l.lang}</span>
                <span className="ml-2 text-xs text-text-mute print:text-gray-600">— {l.level}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

/* ── Reusable section wrapper ── */
function Section({ title, delay = 0, children }: { title: string; delay?: number; children: React.ReactNode }) {
  return (
    <motion.section
      className="mb-7 print:mb-5"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
    >
      <h2
        className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-400 print:text-gray-800
                    border-b border-border-subtle/40 pb-1.5 print:border-gray-300"
      >
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
