"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () => heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="section section-hero section-seam-bottom relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <FloatingShapes section="hero" />

      {/* ==================== INTERACTIVE SPOTLIGHT BACKGROUND ==================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base dark space */}
        <div className="absolute inset-0 bg-bg-900" />

        {/* Mouse-following spotlight */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(124,71,230,0.15)_0%,_rgba(124,71,230,0.05)_30%,_transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(179,140,255,0.08)_0%,_transparent_50%)]" />
        </motion.div>

        {/* Secondary ambient glow - always visible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_rgba(124,71,230,0.06),_transparent_60%)]" />
      </div>

      {/* ==================== CENTERED CONTENT ==================== */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        {/* Avatar in glassmorphism circular frame */}
        <motion.div
          className="relative mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Glowing ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 blur-md opacity-60 animate-pulse" />

          {/* Glassmorphism frame */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-2 border-primary-500/40 bg-surface-800/30 backdrop-blur-sm p-1.5 shadow-[0_0_40px_rgba(124,71,230,0.25)]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-bg-900/50">
              <Image
                src="/avatar_nobg.png"
                alt="Marczelloo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Massive gradient text name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block bg-gradient-to-r from-text-base via-primary-200 to-primary-400 bg-clip-text text-transparent animate-gradient-shift">
            MARCZELLOO
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-soft mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Full-Stack Developer <span className="text-primary-400 mx-1">•</span>{" "}
          <span className="text-primary-300">Next.js & Node.js</span>
        </motion.p>

        {/* Glass badge pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {/* Location badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-surface-800/40 backdrop-blur-sm text-sm sm:text-base text-text-soft">
            <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Sosnowiec, Poland</span>
          </div>

          {/* Status badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-surface-800/40 backdrop-blur-sm text-sm sm:text-base text-text-soft">
            <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Open to Internships</span>
          </div>
        </motion.div>

        {/* View CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <Link
            href="/cv"
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl
                       bg-gradient-to-r from-primary-700 to-primary-600
                       text-white font-semibold text-sm sm:text-base
                       shadow-[0_4px_20px_rgba(124,71,230,0.3)]
                       transition-all duration-300
                       hover:shadow-[0_8px_30px_rgba(124,71,230,0.45)] hover:scale-105
                       overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>View CV</span>
          </Link>
        </motion.div>
      </div>

      {/* ==================== SCROLL DOWN INDICATOR ==================== */}
      <motion.button
        onClick={() => scrollToSection("journey")}
        className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-300 cursor-pointer group z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <span className="text-xs uppercase tracking-[0.25em] transition-colors group-hover:text-primary-400">
          scroll down
        </span>
        <motion.span
          className="text-primary-400 drop-shadow-[0_0_8px_rgba(176,135,255,0.6)]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.span>
      </motion.button>

      {/* ==================== BOTTOM NAV BAR (preserved) ==================== */}
      <motion.nav
        className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center pb-4 sm:pb-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center gap-1 px-4 py-2 rounded-full border border-border-subtle/30 bg-surface-900/60 backdrop-blur-sm pointer-events-auto shadow-lg">
          {[
            { id: "hero", label: "Home" },
            { id: "journey", label: "Journey" },
            { id: "craft", label: "Craft" },
            { id: "about", label: "About" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-3 py-1.5 text-xs font-medium text-text-mute transition-colors hover:text-primary-300 rounded-full hover:bg-primary-900/20"
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.nav>
    </section>
  );
}
