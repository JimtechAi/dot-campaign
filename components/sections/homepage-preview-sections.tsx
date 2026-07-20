"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  Handshake,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  Waves,
} from "lucide-react";
import { imagePaths } from "@/constants/image-paths";
import { AnimatedCounter } from "@/components/AnimatedCounter";

function FadeUpBlock({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function HomepagePreviewSections() {
  const highlights = [
    {
      title: "Proven Leadership",
      description: "A trusted record of leading club responsibilities with discipline and results.",
      icon: Trophy,
    },
    {
      title: "Administrative Experience",
      description: "Deep working knowledge of Secretariat operations, documentation, and governance flow.",
      icon: Briefcase,
    },
    {
      title: "Integrity",
      description: "Transparent decision-making anchored in fairness, accountability, and respect.",
      icon: ShieldCheck,
    },
    {
      title: "Team Builder",
      description: "Connects sections, stakeholders, and members into a shared path of progress.",
      icon: Users,
    },
    {
      title: "Vision for Ikeja Club",
      description: "A practical, forward-looking agenda for a stronger and more responsive Secretariat.",
      icon: Target,
    },
    {
      title: "Member Focused",
      description: "Service priorities are shaped around member welfare, voice, and confidence.",
      icon: HeartHandshake,
    },
  ] as const;

  const statistics = [
    { value: 7, suffix: "+", label: "Leadership Roles", icon: Award },
    { value: 15, suffix: "+", label: "Years of Service", icon: Landmark },
    { value: 100, suffix: "%", label: "Commitment", icon: BadgeCheck },
    { value: 1, suffix: "", label: "Shared Vision", icon: Handshake },
  ] as const;

  const timelineItems = [
    { title: "Sports Secretary", icon: Briefcase },
    { title: "Swimming Section", icon: Waves },
    { title: "Constitution Committee", icon: Target },
    { title: "Achievers Table", icon: Users },
    { title: "Financial Secretary", icon: BadgeCheck },
    { title: "Assistant General Secretary Candidate", icon: ArrowRight },
  ] as const;

  return (
    <div className="bg-[#F8F9FA] py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <FadeUpBlock>
          <section className="overflow-hidden rounded-3xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm md:p-10">
            <div className="space-y-3 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]">Candidate Highlights</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#0B5D3B] sm:text-4xl">
                Why Vote for SURV. David Olaniyi Taiwo?
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className="rounded-2xl border border-[#0B5D3B]/10 bg-[#F8F9FA] p-5"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#C8A24C]/35 bg-[#C8A24C]/12 text-[#0B5D3B]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-[#2E2E2E]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#2E2E2E]/75">{item.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </section>
        </FadeUpBlock>

        <FadeUpBlock>
          <section className="overflow-hidden rounded-3xl border border-[#0B5D3B]/10 bg-[linear-gradient(150deg,#0B5D3B,#0a3f29)] p-6 text-white shadow-sm md:p-10">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F6E7B3]">Numbers That Matter</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A Track Record You Can Trust</h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {statistics.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.label} className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-[#F6E7B3]" />
                    <p className="mt-3 text-4xl font-bold tracking-tight text-white">
                      <AnimatedCounter value={item.value} suffix={item.suffix} />
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/80">{item.label}</p>
                  </article>
                );
              })}
            </div>
          </section>
        </FadeUpBlock>

        <FadeUpBlock>
          <section className="grid items-center gap-10 rounded-3xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
            <div className="relative h-[360px] overflow-hidden rounded-3xl bg-[#edf2ee] md:h-[470px]">
              <Image
                src={imagePaths.about}
                alt="SURV. David Olaniyi Taiwo (DOT)"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]">About the Candidate</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#0B5D3B] sm:text-4xl">SURV. David Olaniyi Taiwo (DOT)</h2>
              <p className="leading-8 text-[#2E2E2E]/80">
                A seasoned club administrator and committed member of Ikeja Club 1966 with a service-first leadership approach.
              </p>
              <p className="leading-8 text-[#2E2E2E]/80">
                His mission is to build a stronger, more responsive Secretariat that serves all members with excellence.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B5D3B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#094d31]"
              >
                Meet the Candidate
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </FadeUpBlock>

        <FadeUpBlock>
          <section className="space-y-8 rounded-3xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm md:p-10">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]">Campaign Timeline</p>
              <h2 className="text-3xl font-bold tracking-tight text-[#0B5D3B] sm:text-4xl">A Proven Journey of Service</h2>
            </div>
            <div className="relative space-y-4 before:absolute before:left-[17px] before:top-2 before:h-[calc(100%-18px)] before:w-px before:bg-[#0B5D3B]/15 sm:before:left-[19px]">
              {timelineItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
                    className="relative ml-10 rounded-2xl border border-[#0B5D3B]/10 bg-[#F8F9FA] p-5"
                  >
                    <span className="absolute -left-10 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#C8A24C]/40 bg-[#C8A24C]/15 text-[#0B5D3B]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-base font-semibold text-[#2E2E2E]">{item.title}</p>
                  </motion.article>
                );
              })}
            </div>

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-full border border-[#0B5D3B]/25 bg-white px-6 py-3 text-sm font-semibold text-[#0B5D3B] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C8A24C]"
            >
              View Full Experience
            </Link>
          </section>
        </FadeUpBlock>
      </div>
    </div>
  );
}
