import FeaturesSection from "@/components/homepage/features-section";
import HeroSection from "@/components/homepage/hero-section";
import OpenSourceSection from "@/components/homepage/open-source-section";

export default function HomePage(): JSX.Element {
  return (
    <div className="hero flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <div className="border-grey/10 mt-52 border-y">
        <OpenSourceSection />
      </div>
    </div>
  );
}
