export function Footer2010() {
  return (
    <footer className="wp-footer">
      <div
        className="wp-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 24,
          color: "#bbb",
        }}
      >
        <div>
          <h5
            style={{
              fontFamily: "Georgia, serif",
              color: "#fff",
              fontSize: 14,
              borderBottom: "1px dotted #555",
              paddingBottom: 4,
              marginBottom: 8,
            }}
          >
            О сайте
          </h5>
          <p style={{ fontSize: 12, lineHeight: 1.5 }}>
            Корпоративный сайт студии gmakeee. Разработка PWA, Telegram Mini Apps,
            корпоративных порталов и ИИ-решений с 2010 года.
          </p>
        </div>

        <div>
          <h5
            style={{
              fontFamily: "Georgia, serif",
              color: "#fff",
              fontSize: 14,
              borderBottom: "1px dotted #555",
              paddingBottom: 4,
              marginBottom: 8,
            }}
          >
            Навигация
          </h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12 }}>
            <li style={{ padding: "2px 0" }}>
              <a href="#">&raquo; Главная</a>
            </li>
            <li style={{ padding: "2px 0" }}>
              <a href="#services">&raquo; Услуги</a>
            </li>
            <li style={{ padding: "2px 0" }}>
              <a href="#">&raquo; Блог</a>
            </li>
            <li style={{ padding: "2px 0" }}>
              <a href="#">&raquo; О компании</a>
            </li>
          </ul>
        </div>

        <div>
          <h5
            style={{
              fontFamily: "Georgia, serif",
              color: "#fff",
              fontSize: 14,
              borderBottom: "1px dotted #555",
              paddingBottom: 4,
              marginBottom: 8,
            }}
          >
            Контакты
          </h5>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12 }}>
            <li style={{ padding: "2px 0" }}>
              <a href="mailto:d.bolvachev@yandex.ru">d.bolvachev@yandex.ru</a>
            </li>
            <li style={{ padding: "2px 0" }}>
              <a href="https://t.me/gmakeee" target="_blank" rel="noopener noreferrer">
                Telegram: @gmakeee
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="wp-container"
        style={{
          marginTop: 18,
          paddingTop: 12,
          borderTop: "1px solid #444",
          fontSize: 11,
          textAlign: "center",
          color: "#888",
        }}
      >
        © 2010 gmakeee development &middot; All Rights Reserved &middot; Powered by{" "}
        <a href="#">WordPress</a> &middot; Theme by Premium Themes Co.
      </div>
    </footer>
  );
}
