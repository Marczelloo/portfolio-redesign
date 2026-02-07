"use client";

import { useEffect, useRef, useCallback } from "react";

export function useFullpageScroll(sectionIds: string[]) {
  const indexRef = useRef(0);
  const isAnimatingRef = useRef(false);

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
      if (window.innerWidth < 640) return;

      event.preventDefault();

      if (isAnimatingRef.current) return;

      // Extra sync before calculating next section
      syncIndex();

      const direction = event.deltaY;

      if (direction > 0 && indexRef.current < sections.length - 1) {
        indexRef.current += 1;
      } else if (direction < 0 && indexRef.current > 0) {
        indexRef.current -= 1;
      } else {
        return;
      }

      isAnimatingRef.current = true;

      sections[indexRef.current].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isAnimatingRef.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      observer.disconnect();
    };
  }, [sectionIds, syncIndex]);
}
