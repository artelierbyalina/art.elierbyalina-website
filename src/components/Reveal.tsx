"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps a section and fades/slides it into view the first time it scrolls
 * into the viewport. Used deliberately in a few places only — not on every
 * card — per the brief's request for restrained, non-generic motion.
 */
export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
