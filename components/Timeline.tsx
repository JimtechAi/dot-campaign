"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  title: string;
  period?: string;
  description?: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <motion.li
          key={`${item.title}-${index}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
          className="grid gap-4 rounded-2xl border border-[#0B5D3B]/10 bg-white p-5 shadow-sm md:grid-cols-[170px_1fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#C8A24C]">
              {item.period ?? `Phase ${index + 1}`}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#0B5D3B]">{item.title}</h3>
            {item.description ? (
              <p className="mt-2 leading-7 text-[#2E2E2E]/80">{item.description}</p>
            ) : null}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
