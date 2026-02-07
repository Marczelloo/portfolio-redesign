"use client";

import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

const ABOUT_CARDS = [
  {
    id: 1,
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
        />
      </svg>
    ),
    title: "The Academic Path",
    description:
      "Full-stack developer studying Computer Science at the University of Silesia in Katowice, with over 5 years of programming experience and INF.03/INF.04 certifications. My journey started with a technical programming education and grew through self-taught exploration and hands-on projects.",
    align: "left" as const,
    shapeRotation: 12,
  },
  {
    id: 2,
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.362-6.387 8.25 8.25 0 0 0 3 2Z"
        />
      </svg>
    ),
    title: "Tech Passions",
    description:
      "I enjoy building web applications and bots, primarily working with the Next.js/T3 Stack. While I'm comfortable across the full stack, I love switching between different technologies — whether it's C++ or exploring game development. The potential to create something useful and the satisfaction of seeing it come to life is what drives me.",
    align: "right" as const,
    shapeRotation: -15,
  },
  {
    id: 3,
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 1-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    ),
    title: "Future Outlook",
    description:
      "Currently focused on deepening my expertise in Next.js and modern web technologies, while staying open to diverse opportunities in full-stack development. I'm looking for internships and junior roles that challenge my technical skills and allow me to contribute to impactful projects.",
    align: "left" as const,
    shapeRotation: 18,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section section-about section-seam flex items-start justify-center py-8 pb-16 sm:py-14 sm:pb-20 md:py-16 md:pb-24 px-4 sm:px-6"
    >
      <FloatingShapes section="about" />

      <div className="w-full max-w-4xl">
        {/* Section header */}
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400 mb-4 sm:mb-8 md:mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Ch 4: About Me
        </motion.p>

        {/* Zigzag cards */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {ABOUT_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              className={`flex flex-col items-start gap-4 sm:gap-6 md:flex-row md:gap-10 ${card.align === "right" ? "md:flex-row-reverse md:text-right" : ""}`}
              initial={{ opacity: 0, y: 40, x: card.align === "right" ? 30 : -30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" as const }}
            >
              {/* Card content */}
              <div className="max-w-md">
                <motion.div
                  className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl
                              border border-primary-600/20 bg-primary-700/15 text-primary-300
                              ${card.align === "right" ? "md:ml-auto" : ""}`}
                  whileHover={{ scale: 1.1, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {card.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-text-base">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-text-soft">{card.description}</p>
              </div>

              {/* Decorative shape */}
              <div className="hidden md:flex flex-1 items-center justify-center">
                <motion.div
                  className={`h-24 w-24 rounded-2xl border border-primary-700/15 bg-primary-700/8
                              ${card.align === "right" ? "mr-auto" : "ml-auto"}`}
                  style={{ rotate: card.shapeRotation }}
                  whileInView={{ rotate: card.shapeRotation, scale: 1 }}
                  initial={{ rotate: 0, scale: 0.7, opacity: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7, delay: i * 0.1 + 0.3, type: "spring", stiffness: 120 }}
                  whileHover={{ scale: 1.05, rotate: card.shapeRotation + 5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
