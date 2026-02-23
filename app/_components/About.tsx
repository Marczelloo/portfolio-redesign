"use client";

import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

// Bento card data with watermark icons
const BENTO_CARDS = [
  {
    id: 1,
    title: "The Academic Path",
    content:
      "Full-stack developer studying Computer Science at the University of Silesia in Katowice, with over 5 years of programming experience and INF.03/INF.04 certifications. My journey started with a technical programming education and grew through self-taught exploration and hands-on projects.",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zM12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    span: "col-span-full",
  },
  {
    id: 2,
    title: "Tech Passions",
    content:
      "I enjoy building web applications and bots, primarily working with the Next.js/T3 Stack. While I'm comfortable across the full stack, I love switching between different technologies — whether it's C++ or exploring game development. The potential to create something useful and the satisfaction of seeing it come to life is what drives me.",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Future Outlook",
    content:
      "Currently focused on deepening my expertise in Next.js and modern web technologies, while staying open to diverse opportunities in full-stack development. I'm looking for internships and junior roles that challenge my technical skills and allow me to contribute to impactful projects.",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 0 1-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    span: "col-span-1",
  },
];

// Card hover animation variant
const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
};

const iconParallax = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 5 },
};

export default function About() {
  return (
    <section
      id="about"
      className="section section-about section-seam relative h-screen flex flex-col justify-center overflow-hidden"
    >
      <FloatingShapes section="about" />

      {/* Chapter label */}
      <motion.div
        className="absolute top-8 left-8 sm:top-12 sm:left-12 z-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400">
          Ch 4: About Me
        </p>
      </motion.div>

      {/* ==================== BENTO GRID ==================== */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-16 pt-20 sm:pt-24 pb-8">
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(124,71,230,0.08),_transparent_60%)]" />
        </div>

        {/* Bento Grid Container */}
        <div className="relative w-full max-w-5xl">
          {/* CSS Grid: 2 columns, responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {BENTO_CARDS.map((card, index) => (
              <motion.div
                key={card.id}
                className={`${card.span} relative group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Bento Card */}
                <motion.div
                  className="relative h-full min-h-[200px] sm:min-h-[240px] rounded-2xl lg:rounded-3xl overflow-hidden
                             border border-border-subtle/40 bg-surface-900/50 backdrop-blur-xl
                             shadow-[0_4px_40px_-12px_rgba(0,0,0,0.4)]
                             transition-all duration-300 hover:border-primary-500/50 hover:shadow-[0_8px_50px_-12px_rgba(124,71,230,0.15)]
                             p-6 sm:p-8 lg:p-10"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  {/* Watermark icon - large faded background */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 opacity-[0.03] pointer-events-none text-primary-400"
                    variants={iconParallax}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {card.icon}
                  </motion.div>

                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary-500/20 rounded-tl-xl transition-colors duration-300 group-hover:border-primary-500/40" />

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-base mb-4 transition-colors duration-300 group-hover:text-primary-200">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-soft leading-relaxed">
                      {card.content}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
