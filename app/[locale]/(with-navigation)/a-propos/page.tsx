import { PartnersSection } from "./_components/partners-section";
import { VideoSection } from "./_components/video-section";
import { TeamCarousel } from "./_components/team-carousel";
import { HeroSection } from "./_components/hero-section";

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
