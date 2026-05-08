"use client";

import { EraSwitch } from "@/components/era/EraSwitch";
import { Hero2026 } from "@/components/sections/Hero2026";
import { Hero2010 } from "@/components/sections/Hero2010";
import { Hero2000 } from "@/components/sections/Hero2000";

export function EraHero() {
  return (
    <EraSwitch
      variants={{
        "2026": <Hero2026 />,
        "2010": <Hero2010 />,
        "2000": <Hero2000 />,
      }}
    />
  );
}
