export function Hero2000() {
  return (
    <section style={{ position: "relative", zIndex: 1 }} className="chan-board">
      <div className="chan-banner">
        <h1>/dev/ - Web Development</h1>
        <div className="sub">&quot;Цифровые продукты, которые работают на ваш бизнес&quot;</div>
      </div>

      <div className="chan-toplinks">
        <a href="#">[Home]</a>
        <span className="pipe">/</span>
        <a href="#services">[Boards]</a>
        <span className="pipe">/</span>
        <a href="#">[FAQ]</a>
        <span className="pipe">/</span>
        <a href="#">[Rules]</a>
        <span className="pipe">/</span>
        <a href="https://t.me/gmakeee" target="_blank" rel="noopener noreferrer">[Contact]</a>
      </div>

      <hr className="chan-rule-line" />

      <div className="chan-rules">
        <strong style={{ color: "#af0a0f" }}>Welcome to /dev/</strong>
        <ul>
          <li>PWA, Telegram Mini Apps и ИИ-автоматизация — от идеи до запуска под ключ.</li>
          <li>Результат: конверсия, скорость, рост. Серьёзно. Без шуток.</li>
          <li>Read the rules before posting. Sage in all fields if you have nothing to add.</li>
        </ul>
      </div>

      <div className="chan-postform">
        <table>
          <tbody>
            <tr>
              <td className="label">Subject</td>
              <td>
                <input type="text" defaultValue="Запрос на разработку" style={{ width: 280 }} />
              </td>
              <td>
                <a href="#services" className="chan-cta-btn">[Посмотреть услуги]</a>
                <a
                  href="https://t.me/gmakeee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chan-cta-btn"
                >
                  [Написать в Telegram]
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="chan-rule-line" />
    </section>
  );
}
