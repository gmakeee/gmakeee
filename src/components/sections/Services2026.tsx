"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { services } from "@/config/services";
import { TelegramCTA } from "@/components/ui/TelegramCTA";

export function Services2026() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const openService = useCallback((id: string) => {
    setActiveId(id);
    document.body.style.overflow = "hidden";
  }, []);

  const closeService = useCallback(() => {
    setActiveId(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeService();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [closeService]);

  const activeService = services.find((s) => s.id === activeId) ?? null;
  const activeIndex = services.findIndex((s) => s.id === activeId);

  const getSpan = (index: number) => {
    if (index === 0) return "md:col-span-2 lg:col-span-4";
    if (index === 1) return "md:col-span-1 lg:col-span-2";
    if (index === 2) return "md:col-span-1 lg:col-span-3";
    if (index === 3) return "md:col-span-2 lg:col-span-3";
    return "md:col-span-2 lg:col-span-6";
  };

  return (
    <>
      <section
        id="services"
        style={{ position: "relative", zIndex: 1 }}
        className="py-24 px-6 max-w-6xl mx-auto"
      >
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "#0071e3" }}>
            / Услуги
          </p>
          <h2
            className="font-bold tracking-tighter mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#1D1D1F", lineHeight: 1.1 }}
          >
            Что я делаю
          </h2>
          <p style={{ color: "#86868B", fontSize: "1.1rem", maxWidth: "520px", fontWeight: 500, lineHeight: 1.6 }}>
            Нажмите на карточку — я расскажу подробнее о каждом направлении.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => openService(service.id)}
              className={`liquid-glass text-left p-8 md:p-10 rounded-[2rem] group transition-all duration-300 hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 ${getSpan(index)} min-h-[280px] flex flex-col justify-between`}
              style={{ cursor: "pointer", border: "none", outline: "none" }}
            >
              <div>
                <p
                  className="text-xs font-mono uppercase tracking-widest mb-5"
                  style={{ color: "#0071e3" }}
                >
                  0{index + 1} / {service.id}
                </p>
                <h3
                  className="font-semibold tracking-tighter mb-3 transition-colors duration-200 group-hover:text-[#0071e3]"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", color: "#1D1D1F", lineHeight: 1.2 }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "#86868B", fontSize: "0.92rem", lineHeight: 1.65, fontWeight: 500 }}>
                  {service.shortDesc}
                </p>
              </div>

              <div
                className="mt-6 flex items-center gap-2 text-sm font-semibold transition-colors duration-200 group-hover:text-[#0071e3]"
                style={{ color: "#86868B" }}
              >
                <span>Подробнее</span>
                <ArrowRight
                  strokeWidth={1.5}
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeService && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeService}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 90,
                background: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            />

            <div
              style={{
                position: "fixed",
                inset: "12px",
                zIndex: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  maxHeight: "calc(100vh - 24px)",
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(40px) saturate(200%)",
                  WebkitBackdropFilter: "blur(40px) saturate(200%)",
                  borderRadius: "2rem",
                  border: "1px solid rgba(255,255,255,0.7)",
                  boxShadow: "0 32px 80px -12px rgba(0,0,0,0.18), inset 0 1px 1px rgba(255,255,255,0.9)",
                  pointerEvents: "auto",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 40px",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderRadius: "2rem 2rem 0 0",
                  }}
                >
                  <p
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: "#0071e3" }}
                  >
                    0{activeIndex + 1} / {activeService.id}
                  </p>
                  <button
                    onClick={closeService}
                    style={{
                      background: "rgba(0,0,0,0.05)",
                      border: "none",
                      borderRadius: "50%",
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.1)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.05)"; }}
                    aria-label="Закрыть"
                  >
                    <X strokeWidth={1.5} size={18} color="#1D1D1F" />
                  </button>
                </div>

                <div style={{ padding: "40px", flex: 1 }}>
                  <h2
                    className="font-bold tracking-tighter mb-4"
                    style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1D1D1F", lineHeight: 1.1 }}
                  >
                    {activeService.title}
                  </h2>
                  <p
                    className="mb-8"
                    style={{ fontSize: "1.1rem", color: "#1D1D1F", lineHeight: 1.7, fontWeight: 400, maxWidth: "600px" }}
                  >
                    {activeService.fullDesc}
                  </p>

                  <p
                    className="text-xs font-mono uppercase tracking-widest mb-5"
                    style={{ color: "#86868B" }}
                  >
                    Ключевые возможности
                  </p>
                  <ul className="space-y-3 mb-10">
                    {activeService.fullDetails.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          style={{
                            display: "block",
                            marginTop: "8px",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#0071e3",
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ color: "#1D1D1F", lineHeight: 1.65 }}>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{
                      background: "rgba(0,0,0,0.025)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      borderRadius: "1rem",
                      padding: "24px",
                      marginBottom: "32px",
                    }}
                  >
                    <p
                      className="text-xs font-mono uppercase tracking-widest mb-3"
                      style={{ color: "#86868B" }}
                    >
                      О процессе
                    </p>
                    <p style={{ color: "#86868B", lineHeight: 1.65, fontSize: "0.95rem" }}>
                      Работаю по чёткому процессу: бриф → прототип → разработка → тест →
                      запуск. Всегда на связи, всегда в срок. Индивидуальный подход к
                      каждому проекту и полная прозрачность на каждом этапе.
                    </p>
                  </div>

                  <TelegramCTA username="gmakeee" email="d.bolvachev@yandex.ru" />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
