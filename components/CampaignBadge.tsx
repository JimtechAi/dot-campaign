import Image from "next/image";
import { imagePaths } from "@/constants/image-paths";

type CampaignBadgeProps = {
  label?: string;
};

export function CampaignBadge({ label = "DOT Campaign" }: CampaignBadgeProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#0B5D3B]/10 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
      <Image
        src={imagePaths.logo.dot}
        alt="DOT campaign logo"
        width={30}
        height={30}
        className="h-7 w-7 object-contain"
      />
      <Image
        src={imagePaths.logo.ikejaClub}
        alt="Ikeja Club logo"
        width={24}
        height={24}
        className="h-6 w-6 object-contain"
      />
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B5D3B]">
        {label}
      </span>
    </div>
  );
}
