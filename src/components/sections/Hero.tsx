// NO "use client" — this is a server component, CSS handles animation
// This avoids any Framer Motion hydration issues that hide the text

export function Hero() {
  return (
    <section
      style={{ position: "relative", zIndex: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-32 text-center"
    >
      {/* Available badge */}
      <div className="anim-fade-up anim-fade-up-1 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.04] border border-black/[0.06]">
        <span className="relative flex h-2 w-2">
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ background: "#0071e3" }}
          />
          <span
            className="relative inline-flex rounded-full h-2 w-2"
            style={{ background: "#0071e3" }}
          />
        </span>
        <span className="text-sm font-medium tracking-wide" style={{ color: "#1D1D1F", opacity: 0.75 }}>
          Доступен для новых проектов
        </span>
      </div>

      {/* Headline */}
      <h1
        className="anim-fade-up anim-fade-up-2 font-bold tracking-tighter leading-[1.05] mb-6"
        style={{
          fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
          color: "#1D1D1F",
          maxWidth: "900px",
        }}
      >
        Я создаю цифровые продукты,{" "}
        <br className="hidden md:block" />
        <span style={{ color: "#0071e3" }}>которые работают на ваш бизнес</span>
      </h1>

      {/* Sub-headline */}
      <p
        className="anim-fade-up anim-fade-up-3 leading-relaxed mb-10"
        style={{
          fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
          color: "#86868B",
          maxWidth: "580px",
          fontWeight: 500,
        }}
      >
        PWA, Telegram Mini Apps и ИИ-автоматизация — от идеи до&nbsp;запуска под ключ.
        Результат: конверсия, скорость, рост.
      </p>

      {/* CTAs */}
      <div className="anim-fade-up anim-fade-up-4 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#services"
          className="btn-primary"
        >
          Смотреть услуги
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>

        <a
          href="https://t.me/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Написать в Telegram
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="anim-fade-up anim-fade-up-4 mt-20 flex flex-col items-center gap-2 opacity-40">
        <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", fontWeight: 600, color: "#86868B", textTransform: "uppercase" }}>
          Прокрутите вниз
        </span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#86868B" strokeWidth="1.5" strokeLinecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </section>
  );
}
