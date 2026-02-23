"use client";

import { useEffect, useRef, useCallback } from "react";

export function useFullpageScroll(sectionIds: string[]) {
  const indexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);
  const SCROLL_COOLDOWN = 1000; // ms between scrolls
  const SCROLL_THRESHOLD = 50; // minimum delta to trigger scroll

  // Sync indexRef by finding the section closest to viewport top
  const syncIndex = useCallback(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    let closestIdx = 0;
    let closestDist = Infinity;
    sections.forEach((section, i) => {
      const dist = Math.abs(section.getBoundingClientRect().top);
      if (dist < closestDist) {
        closestDist = dist;
        closestIdx = i;
      }
    });

    indexRef.current = closestIdx;
  }, [sectionIds]);

  const scrollToSection = useCallback((direction: "next" | "prev") => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const now = Date.now();
    if (now - lastScrollTimeRef.current < SCROLL_COOLDOWN || isAnimatingRef.current) return;

    // Sync before calculating
    syncIndex();

    if (direction === "next" && indexRef.current < sections.length - 1) {
      indexRef.current += 1;
    } else if (direction === "prev" && indexRef.current > 0) {
      indexRef.current -= 1;
    } else {
      return;
    }

    lastScrollTimeRef.current = now;
    isAnimatingRef.current = true;

    sections[indexRef.current].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, SCROLL_COOLDOWN);
  }, [sectionIds, syncIndex]);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    // IntersectionObserver keeps indexRef in sync when navbar triggers scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target as HTMLElement);
            if (idx !== -1) {
              indexRef.current = idx;
            }
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((s) => observer.observe(s));

    const handleWheel = (event: WheelEvent) => {
      // Disable fullpage snap on mobile-width viewports — let content scroll naturally
      if (window.innerWidth < 1024) return;

      const now = Date.now();
      if (now - lastScrollTimeRef.current < SCROLL_COOLDOWN || isAnimatingRef.current) {
        event.preventDefault();
        return;
      }

      const delta = Math.abs(event.deltaY);
      if (delta < SCROLL_THRESHOLD) return;

      event.preventDefault();

      if (event.deltaY > 0) {
        scrollToSection("next");
      } else {
        scrollToSection("prev");
      }
    };

    // Keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only if not focused on an input/textarea
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        scrollToSection("next");
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        scrollToSection("prev");
      } else if (event.key === "Home") {
        event.preventDefault();
        indexRef.current = 0;
        lastScrollTimeRef.current = Date.now();
        sections[0]?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (event.key === "End") {
        event.preventDefault();
        indexRef.current = sections.length - 1;
        lastScrollTimeRef.current = Date.now();
        sections[sections.length - 1]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Touch support for mobile swipe (optional, only on larger screens)
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (window.innerWidth < 1024) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (window.innerWidth < 1024) return;

      const now = Date.now();
      if (now - lastScrollTimeRef.current < SCROLL_COOLDOWN || isAnimatingRef.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        // Minimum swipe distance
        e.preventDefault();
        if (diff > 0) {
          scrollToSection("next");
        } else {
          scrollToSection("prev");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      observer.disconnect();
    };
  }, [sectionIds, syncIndex, scrollToSection]);
}
