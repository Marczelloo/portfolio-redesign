"use client";

import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

const TIMELINE = [
  {
    id: 1,
    title: "University of Silesia, Katowice",
    subtitle: "Computer Science · INF.03 & INF.04 Certifications",
    description:
      "Foundations in computer science and algorithmic thinking, building on a technical programming education with 5+ years of self-taught experience.",
    date: "Present",
  },
  {
    id: 2,
    title: "Full-Stack Developer (Contract) — RecodeIT · D9 Space",
    subtitle: "PHP · WordPress (Custom Plugins & Backend Logic)",
    description: null,
    bullets: [
      "Designed and implemented the multi-step booking flow for d9space.com.",
      "Integrated the reservation module with WordPress and built an admin interface.",
      "Implemented backend logic for bookings, availability, and data validation.",
    ],
    date: "2024",
  },

  {
    id: 3,
    title: "Full-Stack Intern — RecodeIT",
    subtitle: "Next.js · TypeScript · T3 Stack · Tailwind · PostgreSQL",
    description: null,
    bullets: [
      "Built and expanded full-stack features using the T3 Stack in a production-oriented project.",
      "Extended an internal employee management panel with leave and holiday management.",
      "Implemented responsive UI components and collaborated during code reviews.",
    ],
    date: "May 2024",
  },
  {
    id: 4,
    title: "Software Development Intern — Hurtopony",
    subtitle: "PHP · HTML/CSS · MySQL",
    description: null,
    bullets: [
      "Developed a PHP-based reporting system generating operational and logistics reports using real company data.",
      "Designed and optimized MySQL queries to analyze order, delivery, and inventory datasets.",
      "Created internal calculation tools and improved existing scripts for maintainability.",
    ],
    date: "May 2023",
  },
] as const;

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Journey() {
  return (
    <section
      id="journey"
      className="section section-journey section-seam flex items-start justify-center py-8 pb-16 sm:py-14 sm:pb-20 md:py-16 md:pb-24 px-4 sm:px-6"
    >
      <FloatingShapes section="journey" />
      <div className="w-full max-w-3xl">
        {/* Section header */}
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400 mb-4 sm:mb-8 md:mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Ch 2: The Journey
        </motion.p>

        {/* Timeline */}
        <div className="relative pl-8">
          {/* Vertical line */}
          <motion.div
            className="absolute left-2.25 top-2 bottom-2 w-px bg-border-subtle origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <div className="flex flex-col gap-5 sm:gap-7 md:gap-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative"
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Dot */}
                <div className="absolute -left-8 top-1 flex items-center justify-center">
                  <motion.span
                    className="h-4.5 w-4.5 rounded-full border-[3px] border-primary-600 bg-bg-900"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.15 + 0.2, type: "spring", stiffness: 400 }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-text-base">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary-300">{item.subtitle}</p>

                    {item.description && (
                      <p className="mt-2 text-xs leading-relaxed text-text-soft">{item.description}</p>
                    )}

                    {"bullets" in item && item.bullets && (
                      <ul className="mt-2 space-y-1 text-xs leading-relaxed text-text-soft">
                        {item.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {item.date && (
                    <span className="shrink-0 rounded-full border border-primary-600/40 bg-primary-700/10 px-3 py-1 text-xs font-medium text-primary-300">
                      {item.date}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
