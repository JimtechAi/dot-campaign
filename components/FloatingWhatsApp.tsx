"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

type FloatingWhatsAppProps = {
  phoneNumber: string;
  message?: string;
};

export function FloatingWhatsApp({ phoneNumber, message }: FloatingWhatsAppProps) {
  const url = message
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phoneNumber}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with campaign team on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0B5D3B] text-white shadow-lg shadow-[#0B5D3B]/35 transition hover:scale-105 hover:bg-[#0a5235] focus:outline-none focus:ring-2 focus:ring-[#C8A24C] focus:ring-offset-2"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
