import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import Showcase from "@/components/Showcase";
import Comparison from "@/components/Comparison";
import Reviews from "@/components/Reviews";
import DownloadSection from "@/components/Download";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <FeaturesSection />
      <HowItWorks />
      <Showcase />
      <Comparison />
      <Reviews />
      <DownloadSection />
    </div>
  );
}
