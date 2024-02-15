import FeaturesSection from "@/components/homepage/features-section";
import HeroSection from "@/components/homepage/hero-section";

export default function HomePage(): JSX.Element {
  return (
    <div className="hero flex flex-col">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
