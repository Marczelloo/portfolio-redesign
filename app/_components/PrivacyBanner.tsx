"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STORAGE_KEY = "privacy-acknowledged";

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /* Show banner only if user hasn't dismissed it yet */
    const ack = localStorage.getItem(STORAGE_KEY);
    if (!ack) {
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 26, stiffness: 260 }}
          className="fixed bottom-4 left-4 right-4 z-9999 mx-auto max-w-lg print:hidden"
        >
          <div
            className="relative overflow-hidden rounded-2xl border border-border-subtle/60
                        bg-surface-900/80 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
          >
            {/* Decorative glow line at top */}
            <div
              className="absolute inset-x-0 top-0 h-px
                          bg-linear-to-r from-transparent via-primary-600/60 to-transparent"
            />

            <div className="px-5 py-4 sm:px-6 sm:py-5">
              {/* Icon + text */}
              <div className="flex items-start gap-3">
                {/* Shield icon */}
                <div className="mt-0.5 shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-400"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-base leading-snug">Your privacy matters</p>
                  <p className="mt-1 text-xs leading-relaxed text-text-mute">
                    This site doesn&apos;t use cookies or tracking. The contact form collects your name, email &amp;
                    message — that&apos;s it.{" "}
                    <Link
                      href="/privacy"
                      className="text-primary-300 underline underline-offset-2
                                 decoration-primary-700/50 transition-colors
                                 hover:text-primary-400 hover:decoration-primary-400/50"
                    >
                      Privacy&nbsp;Policy
                    </Link>
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={dismiss}
                  className="group relative cursor-pointer rounded-xl px-5 py-2 text-xs font-semibold
                             uppercase tracking-wider text-text-base
                             bg-primary-700/20 border border-primary-700/30
                             transition-all duration-200
                             hover:bg-primary-700/30 hover:border-primary-600/50
                             hover:shadow-[0_0_20px_rgba(179,140,255,0.12)]
                             active:scale-[0.97]"
                >
                  <span className="relative z-10">Got it</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
