"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type VisionCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export function VisionCard({ title, description, icon }: VisionCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#0B5D3B]/10"
    >
      {icon ? (
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#C8A24C]/35 bg-[#C8A24C]/10 text-[#0B5D3B]">
          {icon}
        </span>
      ) : null}
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#0B5D3B]">{title}</h3>
      <p className="mt-3 leading-7 text-[#2E2E2E]/80">{description}</p>
    </motion.article>
  );
}
