import { EraBackground } from "@/components/ui/EraBackground";
import { EraHero } from "@/components/sections/EraHero";
import { EraServices } from "@/components/sections/EraServices";
import { EraSlider } from "@/components/era/EraSlider";

export default function Home() {
  return (
    <div className="relative">
      <EraBackground />
      <EraHero />
      <EraServices />
      <EraSlider />
    </div>
  );
}
