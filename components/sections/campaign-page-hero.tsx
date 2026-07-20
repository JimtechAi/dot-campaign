"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imagePaths } from "@/constants/image-paths";

type CampaignPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function CampaignPageHero({ eyebrow, title, description }: CampaignPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-7rem] h-72 w-72 rounded-full bg-[#0B5D3B]/10 blur-3xl" />
        <div className="absolute right-[-7rem] top-6 h-72 w-72 rounded-full bg-[#C8A24C]/12 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1280px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
            className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#0B5D3B] sm:text-5xl"
          >
            {title}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
            className="mt-5 max-w-3xl text-lg leading-8 text-[#2E2E2E]/80"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          className="relative h-[340px] overflow-hidden rounded-3xl bg-[#eef3ee] sm:h-[420px]"
        >
          <Image
            src={imagePaths.hero}
            alt="SURV. David Olaniyi Taiwo (DOT)"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-contain object-bottom"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(255,255,255,0.4)_78%,rgba(255,255,255,0.85)_100%)]" />
        </motion.div>
      </div>
    </section>
  );
}
