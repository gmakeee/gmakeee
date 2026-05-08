"use client";

import { useState } from "react";
import { services } from "@/config/services";

const PUBLISH_DATES = [
  "12 марта 2010",
  "27 апреля 2010",
  "14 июня 2010",
  "08 августа 2010",
  "21 октября 2010",
];

const COMMENTS_COUNT = [42, 18, 31, 12, 56];

export function Services2010() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="services"
      style={{ position: "relative", zIndex: 1, padding: "32px 0 56px" }}
    >
      <div
        className="wp-container"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 260px",
          gap: 32,
          alignItems: "start",
        }}
      >
        {/* Main column */}
        <div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 26,
              fontWeight: "bold",
              color: "#222",
              borderBottom: "2px solid #2c5f8d",
              paddingBottom: 6,
              marginBottom: 18,
            }}
          >
            Наши услуги и решения
          </h2>

          {services.map((service, index) => {
            const isOpen = openId === service.id;
            return (
              <article key={service.id} className="wp-card">
                <div className="wp-meta">
                  Опубликовано <strong>admin</strong> &middot;{" "}
                  {PUBLISH_DATES[index] ?? "2010"} &middot;{" "}
                  <a href="#">{COMMENTS_COUNT[index] ?? 0} комментариев</a> &middot;
                  Категория: <a href="#">{service.title}</a>
                </div>

                <div className="wp-thumb" aria-hidden />

                <h3>
                  <a
                    href={`#${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggle(service.id);
                    }}
                  >
                    {service.title}
                  </a>
                </h3>

                <p style={{ color: "#444", marginBottom: 12 }}>
                  {service.shortDesc}
                </p>

                {isOpen && (
                  <div style={{ marginTop: 8 }}>
                    <p style={{ color: "#333", marginBottom: 14 }}>
                      {service.fullDesc}
                    </p>

                    <h4
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "#2c5f8d",
                        margin: "10px 0 6px",
                      }}
                    >
                      Ключевые преимущества:
                    </h4>
                    <ul style={{ paddingLeft: 22, marginBottom: 14, color: "#333" }}>
                      {service.fullDetails.map((d, i) => (
                        <li key={i} style={{ listStyle: "square", marginBottom: 4 }}>
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div
                      style={{
                        background: "#fffbe6",
                        border: "1px solid #f0d75a",
                        padding: "10px 12px",
                        fontSize: 12,
                        color: "#776300",
                        marginBottom: 14,
                      }}
                    >
                      <strong>Заметка:</strong> Работаю по чёткому процессу: бриф &rarr;
                      прототип &rarr; разработка &rarr; тест &rarr; запуск. Всегда на связи,
                      всегда в срок.
                    </div>

                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <a
                        href="https://t.me/gmakeee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wp-readmore"
                      >
                        Написать в Telegram &raquo;
                      </a>
                      <a href="mailto:d.bolvachev@yandex.ru" className="wp-readmore">
                        Email &raquo;
                      </a>
                    </div>
                  </div>
                )}

                <div style={{ clear: "both", marginTop: 12 }}>
                  {!isOpen && (
                    <a
                      href={`#${service.id}`}
                      className="wp-readmore"
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(service.id);
                      }}
                    >
                      Read more &raquo;
                    </a>
                  )}
                  {isOpen && (
                    <button
                      type="button"
                      onClick={() => toggle(service.id)}
                      className="wp-readmore"
                      style={{
                        background:
                          "linear-gradient(to bottom, #efefef 0%, #d6d6d6 100%)",
                        color: "#222",
                        border: "1px solid #b0b0b0",
                        textShadow: "0 1px 0 rgba(255,255,255,0.6)",
                        cursor: "pointer",
                      }}
                    >
                      &laquo; Свернуть
                    </button>
                  )}
                </div>

                <div style={{ marginTop: 14, fontSize: 12, color: "#777" }}>
                  Метки:{" "}
                  <a href="#" className="wp-tag">
                    {service.id}
                  </a>
                  <a href="#" className="wp-tag">
                    разработка
                  </a>
                  <a href="#" className="wp-tag">
                    бизнес
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Sidebar */}
        <aside>
          <div className="wp-sidebar-widget">
            <h4>Поиск</h4>
            <div style={{ padding: 10 }}>
              <input
                type="text"
                placeholder="Поиск..."
                style={{
                  width: "100%",
                  padding: "4px 6px",
                  border: "1px solid #b0b0b0",
                  fontSize: 13,
                }}
              />
            </div>
          </div>

          <div className="wp-sidebar-widget">
            <h4>Свежие записи</h4>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="wp-sidebar-widget">
            <h4>Категории</h4>
            <ul>
              <li>
                <a href="#">Web-разработка ({services.length})</a>
              </li>
              <li>
                <a href="#">Telegram (1)</a>
              </li>
              <li>
                <a href="#">PWA (1)</a>
              </li>
              <li>
                <a href="#">CRM &amp; ERP (1)</a>
              </li>
              <li>
                <a href="#">Искусственный интеллект (1)</a>
              </li>
            </ul>
          </div>

          <div className="wp-sidebar-widget">
            <h4>Облако меток</h4>
            <div style={{ padding: 10 }}>
              {[
                "pwa",
                "tma",
                "crm",
                "сайты",
                "ИИ",
                "автоматизация",
                "разработка",
                "бизнес",
              ].map((t) => (
                <a key={t} href="#" className="wp-tag">
                  {t}
                </a>
              ))}
            </div>
          </div>

          <div className="wp-sidebar-widget">
            <h4>Контакты</h4>
            <ul>
              <li>
                <a href="https://t.me/gmakeee" target="_blank" rel="noopener noreferrer">
                  Telegram: @gmakeee
                </a>
              </li>
              <li>
                <a href="mailto:d.bolvachev@yandex.ru">Email</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
