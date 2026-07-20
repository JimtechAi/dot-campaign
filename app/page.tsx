import { HeroSection } from "@/components/hero/hero-section";
import { ElectionCountdownSection } from "@/components/sections/election-countdown-section";
import { HomepagePreviewSections } from "@/components/sections/homepage-preview-sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ElectionCountdownSection />
      <HomepagePreviewSections />
    </>
  );
}
