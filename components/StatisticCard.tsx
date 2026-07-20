"use client";

import type { ReactNode } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

type StatisticCardProps = {
  label: string;
  value: number;
  suffix?: string;
  icon?: ReactNode;
};

export function StatisticCard({ label, value, suffix, icon }: StatisticCardProps) {
  return (
    <article className="rounded-2xl border border-[#0B5D3B]/10 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
      {icon ? <div className="text-[#0B5D3B]">{icon}</div> : null}
      <p className="mt-2 text-3xl font-bold tracking-tight text-[#0B5D3B]">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="mt-1 text-sm text-[#2E2E2E]/75">{label}</p>
    </article>
  );
}
