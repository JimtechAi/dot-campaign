import Image from "next/image";
import Link from "next/link";
import { imagePaths } from "@/constants/image-paths";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About DOT", href: "/about" },
  { label: "Vision", href: "/vision" },
  { label: "Experience", href: "/experience" },
  { label: "Gallery", href: "/gallery" },
  { label: "Endorsements", href: "/endorsements" },
  { label: "Campaign Journey", href: "/campaign-updates" },
  { label: "Contact", href: "/contact" },
] as const;

const socialLinks = [
  { label: "Facebook", shortLabel: "FB", href: "/" },
  { label: "Instagram", shortLabel: "IG", href: "/" },
  { label: "X", shortLabel: "X", href: "/" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#C8A24C]/20 bg-[linear-gradient(145deg,#072f20,#0B5D3B)] text-white">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm">
                <Image src={imagePaths.logo.dot} alt="DOT logo" fill sizes="48px" className="object-contain" />
              </span>
              <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">
                <Image
                  src={imagePaths.logo.ikejaClub}
                  alt="Ikeja Club logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">SURV. David Olaniyi Taiwo (DOT)</p>
              <p className="text-sm text-white/78">Candidate for Assistant General Secretary</p>
              <p className="text-sm text-white/78">Ikeja Club 1966</p>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/74">
              Experience. Integrity. Service. Together, We Create Memories. Together, We Shine.
            </p>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F6E7B3]">Campaign Motto</p>
          </section>

          <section className="space-y-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F6E7B3]">Quick Links</h2>
            <nav aria-label="Footer quick links" className="grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/80 transition-colors hover:text-white hover:underline hover:decoration-[#C8A24C] hover:underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </section>

          <section className="space-y-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F6E7B3]">Social Icons</h2>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-semibold text-white transition-colors hover:border-[#C8A24C] hover:bg-[#C8A24C]/25"
                >
                  {social.shortLabel}
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {year} DOT Campaign Website. All rights reserved.</p>
          <p>Ikeja Club Election Campaign</p>
        </div>
      </div>
    </footer>
  );
}
