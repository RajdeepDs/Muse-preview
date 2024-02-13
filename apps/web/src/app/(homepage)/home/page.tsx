import FeaturesSection from "@/components/homepage/features-section";
import HeroSection from "@/components/homepage/hero-section";

export default function HomePage(): JSX.Element {
  return (
    <main className="mt-16 flex flex-col">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
