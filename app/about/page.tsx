"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { imagePaths } from "@/constants/image-paths";

const education = ["HND", "B.Tech", "LL.B", "M.Tech", "MDRM"] as const;

const timeline = [
  "Former Sports Secretary",
  "Pioneer Chairman, Swimming Section",
  "Former Constitution Review Committee Member",
  "Former Scribe, Achievers Table",
  "Former Exchequer, Achievers Table",
  "Current Deputy Governor, Achievers Table",
  "Current Financial Secretary, Ikeja Club",
] as const;

const values = [
  { title: "Integrity", icon: ShieldCheck },
  { title: "Transparency", icon: Target },
  { title: "Service", icon: Users },
  { title: "Innovation", icon: Sparkles },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="bg-[#F8F9FA] text-[#2E2E2E]">
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-[#0B5D3B]/10 blur-3xl" />
          <div className="absolute right-[-6rem] top-10 h-64 w-64 rounded-full bg-[#C8A24C]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            className="space-y-6"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]"
            >
              About DOT
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-4xl font-bold tracking-tight text-[#0B5D3B] sm:text-5xl"
            >
              About SURV. David Olaniyi Taiwo (DOT)
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-xl text-lg leading-8 text-[#2E2E2E]/80"
            >
              A Lifetime of Leadership, Service and Commitment
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-[#0B5D3B]/10 bg-[#edf2ee] p-2 shadow-[0_22px_50px_rgba(11,93,59,0.14)] sm:h-[520px]">
              <div className="relative h-full overflow-hidden rounded-2xl">
                <Image
                  src={imagePaths.about}
                  alt="SURV. David Olaniyi Taiwo (DOT)"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold tracking-tight text-[#0B5D3B]">Biography</h2>
            <p className="mt-4 leading-8 text-[#2E2E2E]/80">
              SURV. David Olaniyi Taiwo (DOT) is a committed club leader whose journey in Ikeja Club has been defined by service, discipline, and responsibility. Through multiple leadership roles across key committees and sections, he has consistently promoted accountability, fairness, and member-first decision making. His campaign for Assistant General Secretary reflects a clear commitment to strengthening administration, improving communication, and preserving the values that unite Ikeja Club 1966.
            </p>
          </motion.article>

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-[#C8A24C]" />
              <h2 className="text-2xl font-bold tracking-tight text-[#0B5D3B]">Educational Qualifications</h2>
            </div>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {education.map((qualification) => (
                <li
                  key={qualification}
                  className="rounded-xl border border-[#0B5D3B]/10 bg-[#F8F9FA] px-4 py-3 text-sm font-semibold text-[#2E2E2E]"
                >
                  {qualification}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-8">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#0B5D3B]">Leadership Journey Timeline</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {timeline.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#0B5D3B]/10 bg-[#F8F9FA] px-4 py-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C8A24C]" />
                <span className="text-sm leading-7 text-[#2E2E2E]">{item}</span>
              </li>
            ))}
          </ol>
        </motion.article>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-16 sm:px-6 lg:px-8">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold tracking-tight text-[#0B5D3B]">Leadership Values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-[#0B5D3B]/10 bg-[#F8F9FA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon className={`h-6 w-6 ${index % 2 === 0 ? "text-[#0B5D3B]" : "text-[#C8A24C]"}`} />
                  <p className="mt-3 text-base font-semibold text-[#2E2E2E]">{value.title}</p>
                </div>
              );
            })}
          </div>
        </motion.article>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl bg-[#0B5D3B] px-6 py-12 text-white shadow-lg shadow-[#0B5D3B]/20 sm:px-10"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vote DOT</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/85">
            Support experienced, principled, and service-driven leadership for Assistant General Secretary.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B5D3B] transition-colors hover:bg-[#f0f4f1]"
            >
              Contact Me
            </Link>
            <Link
              href="/vision"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Campaign Vision
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
