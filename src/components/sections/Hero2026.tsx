// NO "use client" — keep CSS-only entry animation so text is always visible.

export function Hero2026() {
  return (
    <section
      style={{ position: "relative", zIndex: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-32 text-center"
    >
      <h1
        className="anim-fade-up anim-fade-up-1 font-bold tracking-tighter leading-[1.05] mb-6"
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

      <p
        className="anim-fade-up anim-fade-up-2 leading-relaxed mb-10"
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

      <div className="anim-fade-up anim-fade-up-3 flex flex-col sm:flex-row items-center gap-4">
        <a href="#services" className="btn-primary">
          Смотреть услуги
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <a
          href="https://t.me/gmakeee"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Написать в Telegram
        </a>
      </div>

      <div className="anim-fade-up anim-fade-up-4 mt-20 flex flex-col items-center gap-2 opacity-40">
        <span
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            fontWeight: 600,
            color: "#86868B",
            textTransform: "uppercase",
          }}
        >
          Прокрутите вниз
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#86868B"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
