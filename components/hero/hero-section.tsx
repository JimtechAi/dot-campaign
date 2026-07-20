"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, FileCheck2, Landmark } from "lucide-react";
import { imagePaths } from "@/constants/image-paths";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={imagePaths.logo.dot}
          alt="DOT watermark"
          width={900}
          height={900}
          className="absolute -right-20 top-8 h-[420px] w-[420px] opacity-[0.045] sm:h-[520px] sm:w-[520px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(11,93,59,0.14),transparent_36%),radial-gradient(circle_at_86%_10%,rgba(200,162,76,0.16),transparent_32%),linear-gradient(160deg,#ffffff_36%,#f4f8f5_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(58deg,rgba(11,93,59,0.35)_0px,rgba(11,93,59,0.35)_1px,transparent_1px,transparent_26px),repeating-linear-gradient(-58deg,rgba(200,162,76,0.28)_0px,rgba(200,162,76,0.28)_1px,transparent_1px,transparent_30px)]" />
        <div className="absolute left-[8%] top-[36%] h-px w-28 bg-[linear-gradient(90deg,transparent,#C8A24C,transparent)] sm:w-40" />
        <div className="absolute right-[12%] top-[30%] h-px w-28 bg-[linear-gradient(90deg,transparent,#C8A24C,transparent)] sm:w-40" />
        <div className="absolute left-[6%] top-[22%] h-40 w-40 rounded-full bg-[#0B5D3B]/10 blur-2xl" />
        <div className="absolute left-[13%] top-[58%] h-24 w-24 rounded-full border border-[#C8A24C]/35 bg-[#C8A24C]/10" />
        <div className="absolute right-[7%] top-[20%] h-44 w-44 rounded-[32%_68%_66%_34%_/_40%_42%_58%_60%] bg-[#0B5D3B]/9 blur-xl" />
        <div className="absolute right-[22%] top-[58%] h-32 w-32 rounded-[66%_34%_41%_59%_/_61%_62%_38%_39%] border border-[#C8A24C]/35 bg-[#C8A24C]/12" />
        <div className="absolute right-[32%] top-[18%] h-14 w-14 rotate-12 rounded-xl border border-[#0B5D3B]/20 bg-white/80" />
        <div className="absolute left-[42%] top-[72%] h-12 w-12 -rotate-12 rounded-xl border border-[#C8A24C]/25 bg-white/75" />
        <motion.div
          animate={{ x: [0, 22, 0], y: [0, -16, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[20%] top-[10%] h-52 w-52 rounded-full bg-[#0B5D3B]/8 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 18, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[16%] bottom-[12%] h-56 w-56 rounded-full bg-[#C8A24C]/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto grid min-h-screen w-full max-w-[1400px] items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10 lg:py-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: { staggerChildren: 0.09, delayChildren: 0.12 },
            },
          }}
          className="space-y-9"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut" }}>
            <span className="inline-flex rounded-full border border-[#0B5D3B]/15 bg-white/85 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#0B5D3B] shadow-sm backdrop-blur-sm">
              OFFICIAL CAMPAIGN • 2026
            </span>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#0B5D3B]/10 bg-[#0B5D3B]/3 px-4 py-2">
              <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                <Image
                  src={imagePaths.logo.dot}
                  alt="DOT campaign logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                  priority
                />
              </span>
              <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-[#C8A24C]/50 bg-white">
                <Image
                  src={imagePaths.logo.ikejaClub}
                  alt="Ikeja Club logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut" }} className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#0B5D3B] sm:text-sm">
              LEADERSHIP ROOTED IN SERVICE
            </p>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-[#0B5D3B] sm:text-5xl lg:text-[72px] lg:leading-[1.02] xl:text-[78px]">
              SURV. David Olaniyi Taiwo (DOT)
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut" }} className="space-y-4">
            <p className="max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Candidate for Assistant General Secretary
              <br />
              Ikeja Club 1966
            </p>
            <p className="max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              Experience.
              <br />
              Integrity.
              <br />
              Service.
              <br />
              <br />
              Together, We Create Memories.
              <br />
              Together, We Shine.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.55, ease: "easeOut" }} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/vision"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#0B5D3B] px-7 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C8A24C] hover:text-[#0B5D3B] hover:shadow-lg hover:shadow-[#C8A24C]/30 focus:outline-none focus:ring-2 focus:ring-[#C8A24C] focus:ring-offset-2"
            >
              My Vision
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#0B5D3B]/30 bg-white px-7 text-sm font-semibold text-[#0B5D3B] shadow-sm transition-all duration-250 hover:-translate-y-0.5 hover:border-[#C8A24C] hover:shadow-lg hover:shadow-[#C8A24C]/20 focus:outline-none focus:ring-2 focus:ring-[#C8A24C] focus:ring-offset-2"
            >
              Meet the Candidate
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid max-w-3xl gap-3 sm:grid-cols-3"
          >
            <article className="rounded-2xl border border-[#0B5D3B]/10 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <Landmark className="h-5 w-5 text-[#0B5D3B]" />
              <p className="mt-2 text-sm font-semibold text-[#0B5D3B]">Former Sports Secretary</p>
            </article>
            <article className="rounded-2xl border border-[#0B5D3B]/10 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <FileCheck2 className="h-5 w-5 text-[#C8A24C]" />
              <p className="mt-2 text-sm font-semibold text-[#0B5D3B]">Constitution Review Committee</p>
            </article>
            <article className="rounded-2xl border border-[#0B5D3B]/10 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <BadgeCheck className="h-5 w-5 text-[#0B5D3B]" />
              <p className="mt-2 text-sm font-semibold text-[#0B5D3B]">Current Financial Secretary</p>
            </article>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
          className="relative self-end lg:-mr-12"
        >
          <div className="absolute -left-7 top-8 h-24 w-24 rounded-[53%_47%_41%_59%_/_61%_42%_58%_39%] border border-[#C8A24C]/35 bg-[#C8A24C]/14 blur-[1px]" />
          <div className="absolute -right-6 bottom-10 h-28 w-28 rounded-[40%_60%_66%_34%_/_56%_33%_67%_44%] border border-[#0B5D3B]/24 bg-[#0B5D3B]/9 blur-[1px]" />
          <div className="pointer-events-none absolute inset-x-[6%] bottom-[8%] h-[55%] rounded-full bg-[radial-gradient(circle_at_center,rgba(11,93,59,0.22),rgba(200,162,76,0.12)_42%,transparent_72%)] blur-2xl" />

          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-[430px] sm:h-[560px] lg:h-[88vh] lg:max-h-[900px]"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 66%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(ellipse at center, rgba(0,0,0,1) 66%, rgba(0,0,0,0) 100%)",
            }}
          >
            <Image
              src={imagePaths.hero}
              alt="SURV. David Olaniyi Taiwo (DOT)"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="h-full w-full object-contain object-bottom drop-shadow-[0_20px_45px_rgba(11,93,59,0.28)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_52%,rgba(248,249,250,0.35)_75%,rgba(248,249,250,0.9)_100%)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}