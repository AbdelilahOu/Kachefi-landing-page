import { HeroSection } from "./_components/hero-section";
import { PartnersSection } from "./_components/partners-section";
import { TeamCarousel } from "./_components/team-carousel";
import { VideoSection } from "./_components/video-section";

export default function MedicalMissionPage() {
  return (
    <main className="space-y-8">
      <HeroSection />
      <PartnersSection />
      <VideoSection />
      <TeamCarousel />
    </main>
  );
}
