"use client";

import { motion } from "framer-motion";
import {
  BadgeDollarSign,
  Building2,
  Eye,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";

const visionCards = [
  {
    title: "Transparent Leadership",
    description:
      "Promote open communication, clear accountability, and decision-making that members can trust.",
    icon: Eye,
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize communication channels, records, and administrative systems for efficiency.",
    icon: Rocket,
  },
  {
    title: "Youth Development",
    description:
      "Create pathways for young members to contribute, lead, and grow within Ikeja Club.",
    icon: Lightbulb,
  },
  {
    title: "Member Engagement",
    description:
      "Strengthen participation through inclusive dialogue, regular updates, and responsive service.",
    icon: Users,
  },
  {
    title: "Financial Accountability",
    description:
      "Uphold prudent stewardship with disciplined reporting and transparent financial processes.",
    icon: BadgeDollarSign,
  },
  {
    title: "Infrastructure Improvement",
    description:
      "Support long-term upgrades that improve member experience and sustain club excellence.",
    icon: Building2,
  },
] as const;

const roadmap = [
  {
    phase: "Phase 1",
    timeline: "First 100 Days",
    title: "Audit, Alignment, and Communication",
    description:
      "Establish clear priorities with stakeholders, review existing workflows, and launch transparent communication updates.",
  },
  {
    phase: "Phase 2",
    timeline: "Months 4-8",
    title: "Process and Platform Improvement",
    description:
      "Deploy practical digital improvements, strengthen records management, and optimize operational response time.",
  },
  {
    phase: "Phase 3",
    timeline: "Months 9-14",
    title: "Member-Centric Program Delivery",
    description:
      "Scale engagement initiatives focused on youth participation, committee collaboration, and inclusive growth.",
  },
  {
    phase: "Phase 4",
    timeline: "Months 15-24",
    title: "Sustainable Growth and Review",
    description:
      "Consolidate gains with measurable reporting, financial accountability, and long-term infrastructure priorities.",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function VisionPage() {
  return (
    <div className="bg-[#F8F9FA] text-[#2E2E2E]">
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-9rem] top-[-7rem] h-72 w-72 rounded-full bg-[#0B5D3B]/10 blur-3xl" />
          <div className="absolute right-[-7rem] top-2 h-72 w-72 rounded-full bg-[#C8A24C]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-[1280px] px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]"
          >
            Campaign Vision
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
            className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#0B5D3B] sm:text-5xl"
          >
            Our Vision for a Greater Ikeja Club
          </motion.h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visionCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#0B5D3B]/10"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#C8A24C]/35 bg-[#C8A24C]/10 text-[#0B5D3B]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl font-semibold tracking-tight text-[#0B5D3B]">{card.title}</h2>
                <p className="mt-3 leading-7 text-[#2E2E2E]/80">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-20 sm:px-6 lg:px-8">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-7 shadow-sm sm:p-10"
        >
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8A24C]">Roadmap Timeline</p>
            <h2 className="text-3xl font-bold tracking-tight text-[#0B5D3B]">Implementation Roadmap</h2>
          </div>

          <div className="mt-8 space-y-6">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                className="grid gap-4 rounded-2xl border border-[#0B5D3B]/10 bg-[#F8F9FA] p-5 md:grid-cols-[180px_1fr]"
              >
                <div>
                  <p className="text-sm font-semibold text-[#0B5D3B]">{item.phase}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-[#C8A24C]">{item.timeline}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2E2E2E]">{item.title}</h3>
                  <p className="mt-2 leading-7 text-[#2E2E2E]/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.article>
      </section>
    </div>
  );
}
