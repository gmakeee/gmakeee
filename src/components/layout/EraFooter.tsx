"use client";

import { EraSwitch } from "@/components/era/EraSwitch";
import { Footer2026 } from "@/components/layout/Footer2026";
import { Footer2010 } from "@/components/layout/Footer2010";
import { Footer2000 } from "@/components/layout/Footer2000";

export function EraFooter() {
  return (
    <EraSwitch
      variants={{
        "2026": <Footer2026 />,
        "2010": <Footer2010 />,
        "2000": <Footer2000 />,
      }}
    />
  );
}
