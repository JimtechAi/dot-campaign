"use client";

import { useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

export function AnimatedCounter({
  value,
  suffix = "",
  durationMs = 1200,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let frame = 0;
    let start: number | null = null;

    const step = (time: number) => {
      if (start === null) {
        start = time;
      }

      const progress = Math.min((time - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };

    frame = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [durationMs, inView, value]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={className}
      aria-label={`${value}${suffix}`}
    >
      {current}
      {suffix}
    </motion.span>
  );
}
