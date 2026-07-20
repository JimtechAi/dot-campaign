"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-5 right-24 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#0B5D3B]/20 bg-white text-[#0B5D3B] shadow-md transition hover:-translate-y-0.5 hover:border-[#C8A24C]"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
