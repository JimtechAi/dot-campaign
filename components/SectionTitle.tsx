"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={[
        "space-y-3",
        centered ? "text-center" : "text-left",
        className ?? "",
      ].join(" ")}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-[#0B5D3B] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-base leading-8 text-[#2E2E2E]/80 sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
