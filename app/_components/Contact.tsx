"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

// Social links data
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/marczelloo",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/marczelloo",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:moskwamarcel@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data?.error ?? "Something went wrong.");
        throw new Error(data?.error ?? "Failed to send");
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section section-contact section-seam-top relative min-h-screen md:h-screen flex flex-col overflow-hidden pb-40 md:pb-0"
    >
      <FloatingShapes section="contact" />

      {/* Chapter label - relative on mobile */}
      <motion.div
        className="relative top-0 left-0 md:absolute md:top-8 md:left-8 sm:md:top-12 sm:md:left-12 z-20 px-6 sm:px-8 pt-6 md:pt-0"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400">
          Ch 5: Contact
        </p>
      </motion.div>

      {/* ==================== SPLIT SCREEN ==================== */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row">
        {/* ==================== LEFT: THE HOOK ==================== */}
        <div className="lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-6 lg:py-12">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none lg:left-0 lg:w-1/2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,_rgba(124,71,230,0.08),_transparent_60%)]" />
          </div>

          <motion.div
            className="relative z-10 max-w-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Huge bold typography */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-base leading-tight mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Let&apos;s build
              <span className="block text-primary-400">something great.</span>
            </motion.h1>

            {/* Friendly paragraph */}
            <motion.p
              className="text-sm sm:text-base md:text-lg text-text-soft leading-relaxed mb-6 md:mb-10 lg:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              Got a project in mind or just want to chat? I&apos;m always open to discussing new opportunities,
              ideas, or just having a great conversation about tech.
            </motion.p>

            {/* Social icon buttons */}
            <motion.div
              className="flex items-center gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                             rounded-xl sm:rounded-2xl bg-surface-800/40 backdrop-blur-sm border border-border-subtle/50
                             text-text-mute transition-all duration-300
                             hover:border-primary-500/50 hover:text-primary-300 hover:shadow-[0_0_24px_rgba(124,71,230,0.2)]"
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox={social.name === "Email" ? "0 0 24 24" : "0 0 24 24"} fill={social.name === "Email" ? "none" : "currentColor"} stroke={social.name === "Email" ? "currentColor" : undefined} strokeWidth={social.name === "Email" ? 2 : undefined}>
                    {social.icon.props.children}
                  </svg>

                  {/* Tooltip - hidden on mobile */}
                  <span className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-medium uppercase tracking-wider text-text-mute opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ==================== RIGHT: THE GLASS FORM ==================== */}
        <div className="lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-6 lg:py-12">
          <motion.div
            className="relative z-10 max-w-lg lg:max-w-xl mx-auto w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glassmorphism form card */}
            <div
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden
                         border border-primary-500/20
                         bg-surface-900/60 backdrop-blur-xl
                         shadow-[0_8px_64px_-16px_rgba(124,71,230,0.12)]
                         p-4 sm:p-6 md:p-8 lg:p-10"
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t border-l border-primary-500/30 rounded-tl-2xl sm:rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-t border-r border-primary-500/30 rounded-tr-2xl sm:rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b border-l border-primary-500/30 rounded-bl-2xl sm:rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-b border-r border-primary-500/30 rounded-br-2xl sm:rounded-br-3xl" />

              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4 md:gap-5">
                {/* Name input */}
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-text-mute">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="rounded-xl border border-border-subtle/50 bg-bg-900/60 px-3.5 py-3 md:px-4 md:py-3.5
                               text-sm text-text-base placeholder:text-text-mute/40 outline-none
                               transition-all duration-300
                               focus:border-primary-500 focus:bg-bg-900/80
                               focus:shadow-[0_0_20px_rgba(124,71,230,0.15),0_0_0_1px_rgba(124,71,230,0.3)]"
                  />
                </div>

                {/* Email input */}
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-text-mute">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="rounded-xl border border-border-subtle/50 bg-bg-900/60 px-3.5 py-3 md:px-4 md:py-3.5
                               text-sm text-text-base placeholder:text-text-mute/40 outline-none
                               transition-all duration-300
                               focus:border-primary-500 focus:bg-bg-900/80
                               focus:shadow-[0_0_20px_rgba(124,71,230,0.15),0_0_0_1px_rgba(124,71,230,0.3)]"
                  />
                </div>

                {/* Message textarea */}
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-text-mute">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="resize-none rounded-xl border border-border-subtle/50 bg-bg-900/60 px-3.5 py-3 md:px-4 md:py-3.5
                               text-sm text-text-base placeholder:text-text-mute/40 outline-none
                               transition-all duration-300
                               focus:border-primary-500 focus:bg-bg-900/80
                               focus:shadow-[0_0_20px_rgba(124,71,230,0.15),0_0_0_1px_rgba(124,71,230,0.3)]"
                  />
                </div>

                {/* Submit button with gradient and icon */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative mt-1 md:mt-2 w-full cursor-pointer
                             rounded-xl bg-gradient-to-r from-primary-700 to-primary-600
                             px-5 py-3.5 md:px-6 md:py-4 text-sm font-semibold text-white
                             shadow-[0_4px_20px_rgba(124,71,230,0.3)]
                             transition-all duration-300
                             hover:shadow-[0_8px_30px_rgba(124,71,230,0.4)]
                             disabled:opacity-60 disabled:cursor-not-allowed
                             overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <span className="relative flex items-center justify-center gap-2 md:gap-2.5">
                    {status === "sending" ? (
                      <>
                        <motion.svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </motion.svg>
                        Sending...
                      </>
                    ) : status === "sent" ? (
                      <>
                        <motion.svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </motion.svg>
                        Sent!
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <motion.svg
                          className="w-4 h-4 md:w-5 md:h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          whileHover={{ x: 4, rotate: -45 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </motion.svg>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Status messages */}
                {status === "error" && (
                  <motion.p
                    className="text-xs sm:text-sm font-medium text-red-400 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {errorMsg || "Something went wrong. Please try again."}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer - minimal version */}
      <motion.footer
        className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 md:py-4 text-[10px] sm:text-xs text-text-mute/60 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="pointer-events-auto">
          &copy; {new Date().getFullYear()} Marczelloo
        </div>
        <div className="flex items-center gap-2 md:gap-3 pointer-events-auto">
          <a href="/privacy" className="transition hover:text-primary-300">
            Privacy
          </a>
          <span className="text-border-subtle">|</span>
          <span className="hidden xs:inline">Next.js</span>
        </div>
      </motion.footer>
    </section>
  );
}
