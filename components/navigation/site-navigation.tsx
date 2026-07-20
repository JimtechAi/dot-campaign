"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { BrandLockup } from "@/components/layout/brand-lockup";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About DOT", href: "/about" },
  { label: "Vision", href: "/vision" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "Endorsements", href: "/endorsements" },
  { label: "Campaign Journey", href: "/campaign-updates" },
  { label: "Contact", href: "/contact" },
] as const;

function isActiveLink(pathname: string | null, href: string) {
  if (!pathname) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNavigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-[#0B5D3B]/10 bg-white/72 shadow-[0_10px_26px_rgba(11,93,59,0.1)] backdrop-blur-xl"
          : "border-transparent bg-white/52 backdrop-blur-lg",
      ].join(" ")}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <BrandLockup size="lg" />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navigationLinks.map((link) => {
            const active = isActiveLink(pathname, link.href);

            return (
              <motion.div key={link.href} whileHover={{ y: -2 }} className="relative">
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                  active
                    ? "bg-white/75 text-[#0B5D3B]"
                    : "text-slate-600 hover:bg-white/60 hover:text-[#0B5D3B]",
                ].join(" ")}
              >
                {link.label}
              </Link>
                {active ? (
                  <motion.span
                    layoutId="active-nav-indicator"
                    className="pointer-events-none absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-[linear-gradient(90deg,#0B5D3B,#C8A24C)]"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                ) : null}
              </motion.div>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((currentState) => !currentState)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0B5D3B]/15 bg-white/70 text-[#0B5D3B] transition-colors hover:bg-[#C8A24C]/15 md:hidden"
        >
          <span className="sr-only">Toggle navigation menu</span>
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <span className="text-lg leading-none">≡</span>}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#0B5D3B]/25 backdrop-blur-[2px] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              id="mobile-navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[86%] max-w-sm flex-col border-l border-[#0B5D3B]/12 bg-white/96 p-5 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="mb-4 flex items-center justify-between border-b border-[#0B5D3B]/10 pb-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0B5D3B]">Menu</p>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0B5D3B]/15 text-[#0B5D3B]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Mobile primary">
                {navigationLinks.map((link, index) => {
                  const active = isActiveLink(pathname, link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03, duration: 0.26, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={[
                          "block rounded-2xl px-4 py-3 text-sm font-medium transition-colors duration-200",
                          active
                            ? "bg-[#0B5D3B] text-white"
                            : "text-slate-700 hover:bg-[#C8A24C]/14 hover:text-[#0B5D3B]",
                        ].join(" ")}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}