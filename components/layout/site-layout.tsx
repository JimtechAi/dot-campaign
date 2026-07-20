"use client";

import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { FloatingActions } from "@/components/floating-actions";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(11,93,67,0.06),_transparent_34%),linear-gradient(to_bottom,_#fbfcf9,_#f7f8f4)] text-slate-700">
      <SiteNavigation />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          id="content"
          className="flex-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <FloatingActions />
      <SiteFooter />
    </div>
  );
}