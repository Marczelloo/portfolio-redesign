"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const TABS = [
  { id: "hero", label: "Hero" },
  { id: "journey", label: "Journey" },
  { id: "craft", label: "Craft" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [active, setActive] = useState<string>("hero");
  const isPortfolio = pathname === "/";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // IntersectionObserver – ustawia active na sekcję, która jest w centrum viewportu
  useEffect(() => {
    if (!isPortfolio) return;

    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isPortfolio]);

  // Hide navbar on non-portfolio pages (e.g. /cv)
  if (!isPortfolio) return null;

  return (
    <motion.nav
      className="fixed bottom-4 sm:bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center
                 gap-0.5 sm:gap-1 rounded-full border border-border-subtle bg-bg-900/80
                 px-1.5 sm:px-2 py-1 sm:py-1.5 text-xs sm:text-sm backdrop-blur-md shadow-lg shadow-black/40
                 print:hidden"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {TABS.map((tab) => {
        const isActive = active === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className="relative rounded-full px-2.5 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-md font-medium
                       text-text-soft transition-colors hover:text-text-base"
          >
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-bg-700/80
                           shadow-[0_0_12px_rgba(179,140,255,0.45)]"
                transition={{ type: "spring", stiffness: 420, damping: 30 }}
              />
            )}
            <span className={`relative z-10 ${isActive ? "text-primary-300" : ""}`}>{tab.label}</span>
          </button>
        );
      })}
    </motion.nav>
  );
}
