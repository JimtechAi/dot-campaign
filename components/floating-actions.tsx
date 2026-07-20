"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buttonClass =
    "inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-[#0B5D3B] shadow-lg shadow-[#0B5D3B]/20 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-[#C8A24C]/60 hover:bg-white/30";

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      <Link
        href="https://wa.me/2340000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={buttonClass}
      >
        <MessageCircle className="h-5 w-5" />
      </Link>

      <Link href="tel:+2340000000000" aria-label="Call" className={buttonClass}>
        <Phone className="h-5 w-5" />
      </Link>

      <Link href="mailto:campaign@dotcampaign.org" aria-label="Email" className={buttonClass}>
        <Mail className="h-5 w-5" />
      </Link>

      {showTop ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={buttonClass}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}
    </div>
  );
}
