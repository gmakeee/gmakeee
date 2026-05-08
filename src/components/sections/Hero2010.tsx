export function Hero2010() {
  return (
    <section style={{ position: "relative", zIndex: 1 }}>
      <div className="wp-header-bar">
        <div className="wp-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ fontFamily: "Georgia, serif", fontWeight: "bold", fontSize: 22, color: "#2c5f8d" }}>
            gmakeee<span style={{ color: "#c0392b" }}>.</span>development
          </div>
          <nav style={{ fontSize: 13, fontWeight: "bold" }}>
            <a href="#" style={{ marginRight: 14 }}>Главная</a>
            <a href="#services" style={{ marginRight: 14 }}>Услуги</a>
            <a href="#" style={{ marginRight: 14 }}>О нас</a>
            <a href="#" style={{ marginRight: 14 }}>Блог</a>
            <a href="https://t.me/gmakeee" target="_blank" rel="noopener noreferrer">Контакты</a>
          </nav>
        </div>
      </div>

      <div className="wp-hero">
        <div className="wp-container">
          <h1>
            Я создаю цифровые продукты,
            <br />
            которые работают на ваш бизнес
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.55, marginBottom: 20 }}>
            PWA, Telegram Mini Apps и ИИ-автоматизация — от идеи до запуска под ключ.
            Результат: конверсия, скорость, рост.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#services" className="wp-readmore" style={{ padding: "10px 22px", fontSize: 13 }}>
              Смотреть услуги &raquo;
            </a>
            <a
              href="https://t.me/gmakeee"
              target="_blank"
              rel="noopener noreferrer"
              className="wp-readmore"
              style={{
                padding: "10px 22px",
                fontSize: 13,
                background: "linear-gradient(to bottom, #efefef 0%, #d6d6d6 100%)",
                color: "#222 !important",
                border: "1px solid #b0b0b0",
                textShadow: "0 1px 0 rgba(255,255,255,0.6)",
              }}
            >
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>

      <div className="wp-container">
        <div className="wp-breadcrumbs">
          <a href="#">Главная</a>
          <span className="sep">&raquo;</span>
          <span>Услуги и решения</span>
        </div>
      </div>
    </section>
  );
}
