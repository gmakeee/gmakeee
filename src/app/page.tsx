import { ServicesSection } from "@/components/sections/ServicesSection";
import { Hero } from "@/components/sections/Hero";
import { AuraBackground } from "@/components/ui/AuraBackground";

export default function Home() {
  return (
    <div className="relative">
      <AuraBackground />
      <Hero />
      <ServicesSection />
    </div>
  );
}

