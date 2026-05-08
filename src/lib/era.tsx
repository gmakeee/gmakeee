"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Era = "2000" | "2010" | "2026";
export const ERAS: Era[] = ["2000", "2010", "2026"];
export const DEFAULT_ERA: Era = "2026";
export const ERA_STORAGE_KEY = "era";

function isEra(value: unknown): value is Era {
  return value === "2000" || value === "2010" || value === "2026";
}

interface EraContextValue {
  era: Era;
  setEra: (era: Era) => void;
}

const EraContext = createContext<EraContextValue | null>(null);

interface EraProviderProps {
  children: ReactNode;
}

export function EraProvider({ children }: EraProviderProps) {
  // Start with DEFAULT_ERA on both server and first client render so React
  // hydration matches. The inline script in layout.tsx has already applied
  // the persisted era to <html data-era>, so CSS-driven theming (background,
  // fonts) is correct on first paint regardless. Below, an effect picks up
  // the real era post-mount.
  const [era, setEraState] = useState<Era>(DEFAULT_ERA);
  const [mounted, setMounted] = useState(false);

  const setEra = useCallback((next: Era) => {
    setEraState(next);
  }, []);

  useEffect(() => {
    let initial: Era = DEFAULT_ERA;
    const fromAttr = document.documentElement.getAttribute("data-era");
    if (isEra(fromAttr)) {
      initial = fromAttr;
    } else {
      try {
        const stored = window.localStorage.getItem(ERA_STORAGE_KEY);
        if (isEra(stored)) initial = stored;
      } catch {
        // ignore (private mode)
      }
    }
    if (initial !== DEFAULT_ERA) setEraState(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-era", era);
    }
    try {
      window.localStorage.setItem(ERA_STORAGE_KEY, era);
    } catch {
      // ignore quota / private mode
    }
  }, [era, mounted]);

  // Cross-tab sync.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== ERA_STORAGE_KEY) return;
      if (isEra(e.newValue)) setEraState(e.newValue);
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo<EraContextValue>(() => ({ era, setEra }), [era, setEra]);

  return <EraContext.Provider value={value}>{children}</EraContext.Provider>;
}

export function useEra(): EraContextValue {
  const ctx = useContext(EraContext);
  if (!ctx) {
    throw new Error("useEra must be used within an <EraProvider>");
  }
  return ctx;
}
