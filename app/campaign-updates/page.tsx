"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Clock3, ExternalLink, Users } from "lucide-react";
import { CampaignPageHero } from "@/components/sections/campaign-page-hero";

type EngagementItem = {
  isoDate: string;
  dateLabel: string;
  group: string;
  title: string;
  description: string;
  image: string;
};

const upcomingEngagements: EngagementItem[] = [
  {
    isoDate: "2026-07-23T10:00:00+01:00",
    dateLabel: "Thursday, July 23, 2026",
    group: "All Members",
    title: "Campaign Flag-off & Members' Meet-and-Greet",
    description:
      "Kick off the campaign journey by introducing the vision, connecting with members, and sharing the commitment to service and excellence.",
    image: "/images/gallery/gallery-01.webp",
  },
  {
    isoDate: "2026-07-28T16:00:00+01:00",
    dateLabel: "Tuesday, July 28, 2026",
    group: "Achievers Table",
    title: "Interactive Session with Achievers Table",
    description:
      "An engaging discussion with Achievers Table members focused on leadership, teamwork, and strengthening club unity.",
    image: "/images/gallery/gallery-02.webp",
  },
  {
    isoDate: "2026-08-01T11:00:00+01:00",
    dateLabel: "Saturday, August 1, 2026",
    group: "G20",
    title: "Meeting with G20 Members",
    description:
      "A strategic engagement with G20 members to exchange ideas and discuss initiatives that will strengthen Ikeja Club.",
    image: "/images/gallery/gallery-03.webp",
  },
  {
    isoDate: "2026-08-05T16:00:00+01:00",
    dateLabel: "Wednesday, August 5, 2026",
    group: "Domestic Section",
    title: "Domestic Section Engagement",
    description:
      "Meeting members of the Domestic Section to appreciate their contributions and discuss ways to improve member experience.",
    image: "/images/about/about.webp",
  },
  {
    isoDate: "2026-08-08T11:00:00+01:00",
    dateLabel: "Saturday, August 8, 2026",
    group: "Lawn Tennis Section",
    title: "Lawn Tennis Section Visit",
    description:
      "Connecting with members of the Lawn Tennis Section to encourage sports development and increased participation.",
    image: "/images/gallery/gallery-04.webp",
  },
  {
    isoDate: "2026-08-12T16:00:00+01:00",
    dateLabel: "Wednesday, August 12, 2026",
    group: "Swimming Section",
    title: "Swimming Section Engagement",
    description:
      "Celebrating the Swimming Section's achievements while discussing opportunities to enhance sporting activities within the club.",
    image: "/images/candidate/candidate-profile.webp",
  },
  {
    isoDate: "2026-08-15T11:00:00+01:00",
    dateLabel: "Saturday, August 15, 2026",
    group: "Young Members",
    title: "Young Members Forum",
    description:
      "Listening to younger members, encouraging active participation, and discussing innovative ideas for the future of Ikeja Club.",
    image: "/images/gallery/gallery-01.webp",
  },
  {
    isoDate: "2026-08-19T16:00:00+01:00",
    dateLabel: "Wednesday, August 19, 2026",
    group: "Cross-Section Members",
    title: "Interactive Members' Forum",
    description:
      "An open conversation with members across different sections of the club, focusing on collaboration, transparency, and shared progress.",
    image: "/images/gallery/gallery-02.webp",
  },
  {
    isoDate: "2026-08-22T11:00:00+01:00",
    dateLabel: "Saturday, August 22, 2026",
    group: "Stakeholders",
    title: "Final Stakeholders' Engagement",
    description:
      "A concluding round of meetings with members and stakeholders to reinforce the campaign vision and express appreciation for their support.",
    image: "/images/gallery/gallery-03.webp",
  },
  {
    isoDate: "2026-08-25T19:00:00+01:00",
    dateLabel: "Tuesday, August 25, 2026",
    group: "All Members",
    title: "Closing Campaign Message",
    description:
      "A final address to members, reflecting on the campaign journey, reaffirming the commitment to serve, and encouraging members to participate in the election on Friday, August 28, 2026.",
    image: "/images/gallery/gallery-04.webp",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CampaignUpdatesPage() {
  const now = new Date();
  const nextUpcomingIndex = upcomingEngagements.findIndex((item) => new Date(item.isoDate) > now);

  return (
    <div className="bg-[#F8F9FA] text-[#2E2E2E]">
      <CampaignPageHero
        eyebrow="Upcoming Campaign Engagements"
        title="Scheduled Member Interactions Before Election Day"
        description="A premium timeline of upcoming meetings and section engagements as SURV. David Olaniyi Taiwo (DOT) connects with Ikeja Club 1966 members."
      />

      <section className="mx-auto w-full max-w-[1280px] px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-3xl border border-[#C8A24C]/35 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#C8A24C]/40 bg-[#C8A24C]/14 text-[#0B5D3B]">
              <Users className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C8A24C]">Timeline Status</p>
              <p className="text-lg font-semibold text-[#0B5D3B]">
                {nextUpcomingIndex === -1
                  ? "All engagements completed"
                  : `Next engagement: ${upcomingEngagements[nextUpcomingIndex].title}`}
              </p>
            </div>
          </div>
        </div>

        <div className="relative space-y-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-[#0B5D3B]/18 sm:before:left-5">
          {upcomingEngagements.map((item, index) => {
            const isCompleted = new Date(item.isoDate) < now;
            const isNextUpcoming = index === nextUpcomingIndex;

            return (
            <motion.article
              key={`${item.title}-${item.isoDate}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
              whileHover={{ y: -5 }}
              className={[
                "relative ml-10 overflow-hidden rounded-3xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#0B5D3B]/10 sm:ml-14",
                isNextUpcoming ? "border-[#C8A24C]/55 ring-1 ring-[#C8A24C]/30" : "border-[#0B5D3B]/10",
              ].join(" ")}
            >
              <span className="absolute -left-[2.6rem] top-8 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#C8A24C]/50 bg-[#C8A24C]/15 text-[11px] font-bold text-[#0B5D3B] sm:-left-[3.4rem]">
                {index + 1}
              </span>
              <span
                className={[
                  "absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]",
                  isCompleted
                    ? "border border-[#0B5D3B]/25 bg-[#0B5D3B]/10 text-[#0B5D3B]"
                    : "border border-[#C8A24C]/35 bg-[#C8A24C]/12 text-[#0B5D3B]",
                ].join(" ")}
              >
                {isCompleted ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock3 className="h-3.5 w-3.5" />}
                {isCompleted ? "Completed" : "Coming Up"}
              </span>
              <div className="relative h-[260px]">
                <Image
                  src={item.image}
                  alt="SURV. David Olaniyi Taiwo (DOT)"
                  fill
                  priority={index < 2}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C8A24C]/30 bg-[#C8A24C]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#0B5D3B]">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {item.dateLabel}
                </div>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#C8A24C]">{item.group}</p>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#0B5D3B]">{item.title}</h2>
                <p className="mt-3 leading-8 text-[#2E2E2E]/80">{item.description}</p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-[#0B5D3B]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B5D3B] transition-all hover:-translate-y-0.5 hover:border-[#C8A24C]"
                  >
                    Add to Calendar
                    <ExternalLink className="h-4 w-4" />
                  </button>

                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-2 rounded-full border border-[#0B5D3B]/14 bg-[#0B5D3B]/5 px-5 py-2.5 text-sm font-semibold text-[#0B5D3B] transition-all hover:-translate-y-0.5 hover:border-[#C8A24C]/50"
                  >
                    View Campaign Moments
                  </Link>
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
