"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="section section-contact section-seam-top flex flex-col items-center justify-center py-12 pb-6 sm:py-20 sm:pb-32 md:py-24 md:pb-32 px-4 sm:px-6"
    >
      <FloatingShapes section="contact" />
      <motion.div
        className="w-full max-w-2xl px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        {/* Section header */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-400 mb-4">Ch 5: Contact</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-base mb-3">Let&apos;s work together</h2>
        <p className="text-sm text-text-soft mb-12">
          Have a project in mind or just want to say hello? Drop me a message and I&apos;ll get back to you as soon as
          possible.
        </p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
        >
          {/* Name + Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-text-mute">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="rounded-xl border border-border-subtle bg-surface-900/60 px-4 py-3 text-sm
                           text-text-base placeholder:text-text-mute/50 outline-none
                           transition-all duration-200 focus:border-primary-600 focus:ring-1 focus:ring-primary-700/40
                           focus:shadow-[0_0_16px_rgba(179,140,255,0.08)]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-text-mute">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="rounded-xl border border-border-subtle bg-surface-900/60 px-4 py-3 text-sm
                           text-text-base placeholder:text-text-mute/50 outline-none
                           transition-all duration-200 focus:border-primary-600 focus:ring-1 focus:ring-primary-700/40
                           focus:shadow-[0_0_16px_rgba(179,140,255,0.08)]"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-text-mute">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project..."
              className="resize-none rounded-xl border border-border-subtle bg-surface-900/60 px-4 py-3
                         text-sm text-text-base placeholder:text-text-mute/50 outline-none
                         transition-all duration-200 focus:border-primary-600 focus:ring-1 focus:ring-primary-700/40
                         focus:shadow-[0_0_16px_rgba(179,140,255,0.08)]"
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 w-fit cursor-pointer self-start rounded-xl bg-primary-700 px-8 py-3 text-sm font-semibold
                       text-white transition-all duration-200 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed
                       hover:shadow-[0_0_24px_rgba(179,140,255,0.3)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Feedback */}
          {status === "sent" && (
            <motion.p
              className="text-sm font-medium text-primary-300"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Message sent! I&apos;ll be in touch.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              className="text-sm font-medium text-accent-pink"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </motion.form>

        {/* Alt contact */}
        <motion.div
          className="mt-14 flex items-center gap-2 text-sm text-text-mute"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>Or reach me directly at</span>
          <a
            href="mailto:moskwamarcel@gmail.com"
            className="text-primary-300 underline underline-offset-2 transition hover:text-primary-400"
          >
            moskwamarcel@gmail.com
          </a>
        </motion.div>
      </motion.div>

      {/* Footer — info on sides, center left empty for navbar */}
      <motion.footer
        className="w-full mt-auto pt-10 pb-20 flex flex-col items-center gap-3 px-4 pointer-events-none
                   sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:w-auto sm:mt-0 sm:pt-0 sm:pb-5
                   sm:flex-row sm:items-end sm:justify-between sm:px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Left side */}
        <div className="flex flex-col gap-1 text-xs text-text-mute/60 pointer-events-auto">
          <span>&copy; {new Date().getFullYear()} Marczelloo</span>
          <span>Built with Next.js & Tailwind</span>
        </div>

        {/* Center spacer for navbar */}
        <div className="hidden sm:block w-72" />

        {/* Right side */}
        <div className="flex items-center gap-4 text-xs text-text-mute/60 pointer-events-auto">
          <a
            href="https://github.com/marczelloo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary-300"
          >
            GitHub
          </a>
          <span className="text-border-subtle">|</span>
          <a
            href="https://linkedin.com/in/marczelloo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary-300"
          >
            LinkedIn
          </a>
          <span className="text-border-subtle">|</span>
          <a href="mailto:moskwamarcel@gmail.com" className="transition hover:text-primary-300">
            Email
          </a>
        </div>
      </motion.footer>
    </section>
  );
}
