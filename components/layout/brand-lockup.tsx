import Image from "next/image";
import Link from "next/link";
import { imagePaths } from "@/constants/image-paths";

type BrandLockupProps = {
  compact?: boolean;
  withSubtitle?: boolean;
  href?: string;
  size?: "md" | "lg";
};

export function BrandLockup({
  compact = false,
  withSubtitle = true,
  href = "/",
  size = "md",
}: BrandLockupProps) {
  const logoSizeClass = size === "lg" ? "h-12 w-12" : "h-10 w-10";
  const logoSizePx = size === "lg" ? 48 : 40;
  const ikejaLogoSizeClass = "h-9 w-9";

  return (
    <Link href={href} className="group inline-flex items-center gap-3">
      <span className="flex items-center gap-[8px]">
        <span className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-200 group-hover:scale-[1.02] ${logoSizeClass}`}>
          <Image
            src={imagePaths.logo.dot}
            alt="DOT campaign logo"
            fill
            sizes={`${logoSizePx}px`}
            className="object-contain"
            priority
          />
        </span>
        <span className={`relative flex items-center justify-center ${ikejaLogoSizeClass}`}>
          <Image
            src={imagePaths.logo.ikejaClub}
            alt="Ikeja Club logo"
            width={36}
            height={36}
            sizes="36px"
            className="object-contain"
          />
        </span>
      </span>

      {!compact ? (
        <span className="flex min-w-0 flex-col">
          <span className="text-sm font-semibold tracking-[0.08em] text-[#0B5D3B]">
            DOT Campaign
          </span>
          {withSubtitle ? (
            <span className="text-xs text-slate-500">
              SURV. David Olaniyi Taiwo
            </span>
          ) : null}
        </span>
      ) : null}
    </Link>
  );
}