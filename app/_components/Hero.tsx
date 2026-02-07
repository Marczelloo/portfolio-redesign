"use client";

import ArrowIcon from "@/components/ui/ArrowIcon";
import BriefcaseIcon from "@/components/ui/BriefcaseIcon";
import LocationIcon from "@/components/ui/LocationIcon";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="section section-hero section-seam-bottom flex items-center justify-center px-4 sm:px-6"
    >
      <FloatingShapes section="hero" />
      <div className="w-full max-w-6xl flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8 lg:w-[65%]">
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/avatar_nobg.png"
            alt="Hero Image"
            width={600}
            height={600}
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-auto lg:h-auto lg:max-w-[340px] 2xl:max-w-[420px] object-cover rounded-lg animate-float-soft hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
        <div className="flex flex-col items-center text-center gap-3 md:items-start md:text-left md:gap-4">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-base uppercase"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Marczelloo
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Full-Stack Developer · <span className="text-primary-300">Next.js & Node.js</span>
          </motion.p>
          <motion.span
            className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm md:text-md md:justify-start"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className="flex items-center gap-1">
              <LocationIcon size={18} />
              Sosnowiec, Poland
            </span>
            <span className="flex items-center gap-1">
              <BriefcaseIcon size={18} />
              Open to internships & junior opportunities
            </span>
          </motion.span>

          {/* CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/cv"
              className="mt-2 inline-flex items-center gap-2 rounded-xl border border-primary-600/40 bg-primary-700/15 px-5 py-2.5
                         text-sm font-semibold text-primary-300 transition-all duration-200
                         hover:bg-primary-700 hover:text-white hover:shadow-[0_0_20px_rgba(179,140,255,0.3)] hover:border-primary-600"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View CV
            </Link>
          </motion.div>

          <motion.button
            onClick={() => scrollToSection("journey")}
            className="mx-auto mt-4 flex flex-col items-center gap-1 text-sm font-medium text-primary-300 cursor-pointer w-fit group md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <span className="uppercase tracking-[0.2em] transition-colors group-hover:text-primary-400">
              scroll down
            </span>
            <motion.span
              className="text-primary-400 drop-shadow-[0_0_8px_rgba(176,135,255,0.6)]"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowIcon size={24} color="text-primary-300" className="rotate-270" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
