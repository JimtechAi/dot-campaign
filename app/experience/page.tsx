"use client";

import { motion, useInView } from "framer-motion";
import {
  BadgeCheck,
  Briefcase,
  ClipboardCheck,
  Coins,
  FileText,
  Landmark,
  Trophy,
  Waves,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type OfficeItem = {
  title: string;
  duration: string;
  description: string;
  achievement: string;
  icon: React.ComponentType<{ className?: string }>;
};

const offices: OfficeItem[] = [
  {
    title: "Former Sports Secretary",
    duration: "",
    description:
      "Coordinated sports activities and strengthened participation across member sporting engagements.",
    achievement:
      "Improved activity planning and consistency of sports programming within the club.",
    icon: Trophy,
  },
  {
    title: "Pioneer Chairman, Swimming Section",
    duration: "",
    description:
      "Led foundational structure and direction for the Swimming Section during its formative stage.",
    achievement:
      "Established a sustainable section framework and promoted member inclusion in aquatic programs.",
    icon: Waves,
  },
  {
    title: "Former Constitution Review Committee Member",
    duration: "",
    description:
      "Contributed to constitutional review discussions with focus on governance clarity and institutional continuity.",
    achievement:
      "Supported reform recommendations that strengthened procedural understanding and compliance.",
    icon: FileText,
  },
  {
    title: "Former Scribe, Achievers Table",
    duration: "",
    description:
      "Documented records, decisions, and proceedings to improve communication and accountability.",
    achievement:
      "Enhanced record-keeping standards and reporting discipline for executive follow-through.",
    icon: ClipboardCheck,
  },
  {
    title: "Former Exchequer, Achievers Table",
    duration: "",
    description:
      "Managed financial responsibilities with diligence, ensuring transparency in allocations and expenditures.",
    achievement:
      "Strengthened accountability culture through clearer financial tracking and reporting.",
    icon: Coins,
  },
  {
    title: "Current Deputy Governor, Achievers Table",
    duration: "",
    description:
      "Supports strategic direction, administrative oversight, and collaborative leadership execution.",
    achievement:
      "Helped sustain operational stability while driving aligned leadership priorities.",
    icon: Landmark,
  },
  {
    title: "Current Financial Secretary, Ikeja Club",
    duration: "",
    description:
      "Oversees core financial administration with emphasis on prudence, transparency, and service delivery.",
    achievement:
      "Built confidence through disciplined financial communication and responsible stewardship.",
    icon: BadgeCheck,
  },
];

const counters = [
  { value: 7, label: "Leadership Offices Held", suffix: "" },
  { value: 3, label: "Current Active Leadership Roles", suffix: "" },
  { value: 100, label: "Commitment to Accountability", suffix: "%" },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedCounter({
  value,
  label,
  suffix,
}: {
  value: number;
  label: string;
  suffix: string;
}) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    let frame = 0;
    let start: number | null = null;
    const duration = 1200;

    const step = (time: number) => {
      if (start === null) {
        start = time;
      }

      const progress = Math.min((time - start) / duration, 1);
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
  }, [inView, value]);

  return (
    <div className="rounded-2xl border border-[#0B5D3B]/10 bg-white p-6 shadow-sm">
      <p ref={ref} className="text-4xl font-bold tracking-tight text-[#0B5D3B]">
        {current}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-[#2E2E2E]/75">{label}</p>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="bg-[#F8F9FA] text-[#2E2E2E]">
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8rem] top-[-7rem] h-72 w-72 rounded-full bg-[#0B5D3B]/10 blur-3xl" />
          <div className="absolute right-[-7rem] top-4 h-72 w-72 rounded-full bg-[#C8A24C]/12 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-[#C8A24C]"
          >
            Leadership Experience
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
            className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#0B5D3B] sm:text-5xl"
          >
            Service Through Proven Leadership Offices
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
            className="mt-5 max-w-3xl text-lg leading-8 text-[#2E2E2E]/80"
          >
            A track record of responsibility across strategic, administrative, and financial leadership roles in Ikeja Club and affiliated structures.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-4 md:grid-cols-3"
        >
          {counters.map((counter) => (
            <AnimatedCounter
              key={counter.label}
              value={counter.value}
              suffix={counter.suffix}
              label={counter.label}
            />
          ))}
        </motion.div>
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
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-[#C8A24C]" />
            <h2 className="text-3xl font-bold tracking-tight text-[#0B5D3B]">Leadership Timeline</h2>
          </div>

          <div className="relative mt-10 space-y-6 before:absolute before:left-[16px] before:top-0 before:h-full before:w-px before:bg-[#0B5D3B]/15 md:before:left-[26px]">
            {offices.map((office, index) => {
              const Icon = office.icon;

              return (
                <motion.div
                  key={office.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={fadeUp}
                  transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
                  className="relative pl-11 md:pl-16"
                >
                  <span className="absolute left-0 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#C8A24C]/40 bg-[#C8A24C]/14 text-[#0B5D3B] md:left-2">
                    <Icon className="h-4 w-4" />
                  </span>

                  <article className="rounded-2xl border border-[#0B5D3B]/10 bg-[#F8F9FA] p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#0B5D3B]">{office.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#C8A24C]">
                      Duration: {office.duration}
                    </p>
                    <p className="mt-4 leading-7 text-[#2E2E2E]/80">
                      <span className="font-semibold text-[#2E2E2E]">Description:</span> {office.description}
                    </p>
                    <p className="mt-3 leading-7 text-[#2E2E2E]/80">
                      <span className="font-semibold text-[#2E2E2E]">Achievement:</span> {office.achievement}
                    </p>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </motion.article>
      </section>
    </div>
  );
}
