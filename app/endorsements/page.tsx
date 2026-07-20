"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { CampaignPageHero } from "@/components/sections/campaign-page-hero";

type Endorsement = {
  group: string;
  quote: string;
  photo: string;
  role: string;
};

const endorsements: Endorsement[] = [
  {
    group: "G20",
    quote: "SURV. David Olaniyi Taiwo (DOT) demonstrates calm, principled leadership and practical administrative depth.",
    photo: "/images/gallery/gallery-01.webp",
    role: "G20 Representative",
  },
  {
    group: "Achievers Table",
    quote: "His stewardship, transparency, and consistency make him a trusted choice for Assistant General Secretary.",
    photo: "/images/gallery/gallery-02.webp",
    role: "Achievers Table Executive",
  },
  {
    group: "Domestic Section",
    quote: "He listens respectfully, follows through responsibly, and protects the values that define our club culture.",
    photo: "/images/gallery/gallery-03.webp",
    role: "Domestic Section Member",
  },
  {
    group: "Lawn Tennis",
    quote: "DOT has always championed inclusion and excellence across sections, including sporting and social engagements.",
    photo: "/images/gallery/gallery-04.webp",
    role: "Lawn Tennis Section Member",
  },
  {
    group: "Swimming Section",
    quote: "We have seen his leadership style up close: disciplined, warm, and focused on service outcomes.",
    photo: "/images/about/about.webp",
    role: "Swimming Section Member",
  },
  {
    group: "Young Members",
    quote: "He creates meaningful opportunities for emerging members to contribute and grow within Ikeja Club.",
    photo: "/images/candidate/candidate-profile.webp",
    role: "Young Members Forum",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function EndorsementsPage() {
  return (
    <div className="bg-[#F8F9FA] text-[#2E2E2E]">
      <CampaignPageHero
        eyebrow="Community Endorsements"
        title="Trusted Voices Across Ikeja Club"
        description="Premium testimonials from influential groups and member communities supporting SURV. David Olaniyi Taiwo (DOT)."
      />

      <section className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {endorsements.map((item, index) => (
            <motion.article
              key={`${item.group}-${index}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-[#0B5D3B]/10"
            >
              <div className="flex items-center justify-between">
                <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#C8A24C]/35 bg-[#C8A24C]/12 text-sm font-bold text-[#0B5D3B]">
                  <Image src={item.photo} alt={item.role} fill sizes="44px" className="object-cover" />
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#C8A24C]/35 bg-[#C8A24C]/10 text-[#0B5D3B]">
                  <Quote className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-4 flex items-center gap-1 text-[#C8A24C]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#C8A24C]">{item.group}</p>
              <p className="mt-3 leading-8 text-[#2E2E2E]/85">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 border-t border-[#0B5D3B]/10 pt-4 text-sm text-[#2E2E2E]/70">{item.role}</p>
            </motion.article>
          ))}
        </div>
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join the Momentum for DOT</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/85">
            Add your voice to this service-driven movement for a stronger Secretariat and a stronger Ikeja Club.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B5D3B] transition-colors hover:bg-[#f0f4f1]"
            >
              Endorse DOT
            </Link>
            <Link
              href="/campaign-updates"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View Campaign Journey
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
