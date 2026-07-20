"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type AchievementCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export function AchievementCard({ title, description, icon }: AchievementCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {icon ? <div className="text-[#0B5D3B]">{icon}</div> : null}
      <h3 className="mt-3 text-lg font-semibold text-[#0B5D3B]">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-[#2E2E2E]/80">{description}</p>
    </motion.article>
  );
}
