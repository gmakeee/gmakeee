"use client";

import { EraSwitch } from "@/components/era/EraSwitch";
import { Services2026 } from "@/components/sections/Services2026";
import { Services2010 } from "@/components/sections/Services2010";
import { Services2000 } from "@/components/sections/Services2000";

export function EraServices() {
  return (
    <EraSwitch
      variants={{
        "2026": <Services2026 />,
        "2010": <Services2010 />,
        "2000": <Services2000 />,
      }}
    />
  );
}
