"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-[#0B5D3B]/10 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#C8A24C]/35 bg-[#C8A24C]/10 text-[#0B5D3B]">
        <Quote className="h-5 w-5" />
      </span>
      <p className="mt-4 leading-8 text-[#2E2E2E]/85">&ldquo;{quote}&rdquo;</p>
      <div className="mt-6 border-t border-[#0B5D3B]/10 pt-4">
        <p className="text-sm font-semibold text-[#0B5D3B]">{name}</p>
        <p className="mt-1 text-sm text-[#2E2E2E]/70">{role}</p>
      </div>
    </motion.article>
  );
}
