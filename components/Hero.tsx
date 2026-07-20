"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { CampaignBadge } from "@/components/CampaignBadge";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  statement?: string;
  actions?: ReactNode;
  media?: ReactNode;
};

export function Hero({
  eyebrow = "OFFICIAL CAMPAIGN",
  title,
  description,
  statement,
  actions,
  media,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(11,93,59,0.12),transparent_35%),radial-gradient(circle_at_90%_12%,rgba(200,162,76,0.14),transparent_28%),linear-gradient(160deg,#ffffff_40%,#f4f8f5_100%)]" />

      <div className="relative mx-auto grid min-h-[70vh] w-full max-w-[1280px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]">
            {eyebrow}
          </p>
          <CampaignBadge />
          <h1 className="text-4xl font-bold tracking-tight text-[#0B5D3B] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="max-w-2xl text-lg leading-8 text-[#2E2E2E]/80">{description}</p>
          ) : null}
          {statement ? <p className="text-base text-[#2E2E2E]/75">{statement}</p> : null}
          {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
        </motion.div>

        {media ? <div className="relative">{media}</div> : null}
      </div>
    </section>
  );
}
