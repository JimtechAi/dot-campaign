"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award } from "lucide-react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const electionDate = new Date("2026-08-28T17:00:00+01:00");
const launchDate = new Date("2026-01-01T00:00:00+01:00");

function formatCountdown(targetDate: Date): TimeLeft {
  const distance = Math.max(targetDate.getTime() - Date.now(), 0);
  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function CountdownMessage() {
  return (
    <div className="rounded-[2rem] border border-[#D8B25C]/40 bg-white/92 px-6 py-10 text-center shadow-[0_22px_60px_rgba(11,93,59,0.14)] backdrop-blur-xl sm:px-10 sm:py-12">
      <p className="text-2xl font-bold tracking-tight text-[#0B5D3B] sm:text-3xl">Election Day is Here!</p>
    </div>
  );
}

function CountdownTile({ label, value }: { label: string; value: number }) {
  const shownValue = value.toString().padStart(2, "0");

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[2rem] border border-[#D8B25C]/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.08))] px-5 py-7 text-center shadow-[0_18px_45px_rgba(11,93,59,0.2)] backdrop-blur-xl sm:px-6 sm:py-8 lg:px-7 lg:py-9"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(216,178,92,0.16),transparent_42%)]" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={shownValue}
          initial={{ opacity: 0, rotateX: -90, y: 12 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          exit={{ opacity: 0, rotateX: 90, y: -12 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="relative text-[72px] font-semibold leading-none tracking-[-0.06em] text-white drop-shadow-[0_10px_22px_rgba(0,0,0,0.24)] sm:text-[84px] lg:text-[96px]"
          style={{ transformPerspective: 700 }}
        >
          {shownValue}
        </motion.div>
      </AnimatePresence>
      <div className="relative mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#F6E7B3] sm:text-sm">
        {label}
      </div>
    </motion.div>
  );
}

export function ElectionCountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const initialFrame = window.setTimeout(() => {
      setTimeLeft(formatCountdown(electionDate));
    }, 0);

    const interval = window.setInterval(() => {
      setTimeLeft(formatCountdown(electionDate));
    }, 1000);

    return () => {
      window.clearTimeout(initialFrame);
      window.clearInterval(interval);
    };
  }, []);

  const isComplete =
    timeLeft !== null &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  const totalWindowSeconds = Math.max(Math.floor((electionDate.getTime() - launchDate.getTime()) / 1000), 1);
  const remainingSeconds = timeLeft
    ? timeLeft.days * 86400 + timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds
    : totalWindowSeconds;
  const progress = timeLeft
    ? Math.max(0, Math.min(100, Math.round((1 - remainingSeconds / totalWindowSeconds) * 1000) / 10))
    : 0;
  const remainingPercent = Math.max(0, 100 - Math.round(progress));

  const floatingParticles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        id: index,
        left: `${(index * 8 + 6) % 92}%`,
        top: `${(index * 17 + 12) % 85}%`,
        size: 6 + (index % 4) * 3,
        duration: 8 + (index % 5) * 2,
        delay: index * 0.4,
      })),
    [],
  );

  return (
    <section className="relative z-10 w-full overflow-visible border-y border-[#0B5D3B]/10 py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-visible bg-[radial-gradient(circle_at_top_left,rgba(216,178,92,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#0b5d3b_0%,#104f36_36%,#184f35_64%,#0a3827_100%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-visible opacity-70 [background-image:radial-gradient(rgba(255,215,128,0.16)_1px,transparent_1px)] [background-size:28px_28px]" />

      {floatingParticles.map((particle) => (
        <motion.span
          key={particle.id}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full bg-[#F1D58A]/70 shadow-[0_0_18px_rgba(241,213,138,0.55)]"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ y: [0, -18, 0], opacity: [0.35, 0.85, 0.35], x: [0, 8, 0] }}
          transition={{ duration: particle.duration, repeat: Infinity, ease: "easeInOut", delay: particle.delay }}
        />
      ))}

      <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[#D8B25C]/45 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#F7E7B5] backdrop-blur-md"
          >
            <Award className="h-4 w-4" />
            Friday, 28 August 2026
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.04 }}
            className="mx-auto max-w-4xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F7E7B5]">Election Day</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Election Day</h2>
            <p className="mt-4 text-lg font-medium text-white/82 sm:text-xl">
              Friday, 28 August 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="h-px w-44 origin-center bg-[linear-gradient(90deg,transparent,rgba(241,213,138,0.95),rgba(255,255,255,0.85),rgba(241,213,138,0.95),transparent)]"
          />

          <div className="w-full max-w-7xl" suppressHydrationWarning>
            {timeLeft === null ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <CountdownTile label="Days" value={0} />
                <CountdownTile label="Hours" value={0} />
                <CountdownTile label="Minutes" value={0} />
                <CountdownTile label="Seconds" value={0} />
              </div>
            ) : isComplete ? (
              <CountdownMessage />
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <CountdownTile label="Days" value={timeLeft.days} />
                <CountdownTile label="Hours" value={timeLeft.hours} />
                <CountdownTile label="Minutes" value={timeLeft.minutes} />
                <CountdownTile label="Seconds" value={timeLeft.seconds} />
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
            className="w-full max-w-3xl"
          >
            <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-[#F7E7B5]">
              <span>Time Remaining</span>
              <span>{remainingPercent}% left</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full border border-[#D8B25C]/40 bg-white/20 backdrop-blur-md">
              <motion.div
                className="h-full bg-[linear-gradient(90deg,#F6E7B3,#C8A24C,#0B5D3B)]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            className="max-w-3xl text-base leading-8 text-white/78 sm:text-lg"
          >
            Election Day • Friday, 28 August 2026
          </motion.p>
        </div>
      </div>
    </section>
  );
}
