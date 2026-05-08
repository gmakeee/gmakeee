"use client";

import { useState } from "react";
import { services } from "@/config/services";

const TRIPCODES = [
  "!!OP/dev2000",
  "!!sage.4chan",
  "!!CRM.guru",
  "!!sitebuilder",
  "!!AGI.now",
];

const POST_DATES = [
  "01/15/00(Sat)14:32",
  "02/03/00(Thu)19:08",
  "02/27/00(Sun)11:55",
  "03/14/00(Tue)22:11",
  "04/02/00(Sun)03:44",
];

const REPLY_NAMES = ["Anonymous", "Anonymous ## Mod", "Anonymous", "Anonymous", "Anonymous"];

export function Services2000() {
  const [openId, setOpenId] = useState<string | null>(null);
  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="services"
      style={{ position: "relative", zIndex: 1, padding: "12px 0 24px" }}
      className="chan-board"
    >
      <hr className="chan-rule-line" />
      <div style={{ fontSize: 12, color: "#800", padding: "4px 0", textAlign: "center" }}>
        <strong style={{ color: "#af0a0f" }}>[Return]</strong>{" "}
        <span style={{ color: "#b07a78" }}>/</span>{" "}
        <a href="#">[Bottom]</a>{" "}
        <span style={{ color: "#b07a78" }}>/</span>{" "}
        <a href="#">[Catalog]</a>{" "}
        <span style={{ color: "#b07a78" }}>/</span>{" "}
        <a href="#">[Refresh]</a>
      </div>
      <hr className="chan-rule-line" />

      {services.map((service, index) => {
        const isOpen = openId === service.id;
        const postNo = 1000000 + index * 137;
        const replyCount = service.fullDetails.length;

        return (
          <div className="chan-thread" key={service.id} id={service.id}>
            <div className="chan-op">
              <div className="chan-thumb" aria-hidden />
              <div className="chan-postinfo">
                <span className="subject">{service.title}</span>{" "}
                <span className="name">Anonymous</span>{" "}
                <span className="tripcode">{TRIPCODES[index] ?? "!!anon"}</span>{" "}
                <span className="date">{POST_DATES[index] ?? "01/01/00(Sat)00:00"}</span>{" "}
                <span className="postno">
                  No.
                  <a
                    href={`#${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggle(service.id);
                    }}
                  >
                    {postNo}
                  </a>
                </span>{" "}
                <span className="actions">
                  [
                  <a
                    href={`#${service.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggle(service.id);
                    }}
                  >
                    Reply
                  </a>
                  ] [<a href="#">Sage</a>] [<a href="#">Hide</a>]
                </span>
              </div>

              <div className="chan-body">
                <span className="chan-greentext">&gt;&gt; {service.shortDesc}</span>
                {"\n\n"}
                {!isOpen && (
                  <>
                    {service.fullDesc.slice(0, 220)}
                    {service.fullDesc.length > 220 ? "..." : ""}
                    {"\n\n"}
                  </>
                )}
                {isOpen && (
                  <>
                    {service.fullDesc}
                    {"\n\n"}
                  </>
                )}
                <span style={{ color: "#000" }}>
                  {!isOpen ? (
                    <a
                      href={`#${service.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(service.id);
                      }}
                      style={{ color: "#34345c" }}
                    >
                      [+] Развернуть тред ({replyCount} {replyCount === 1 ? "ответ" : "ответов"})
                    </a>
                  ) : (
                    <a
                      href={`#${service.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(service.id);
                      }}
                      style={{ color: "#34345c" }}
                    >
                      [&minus;] Свернуть тред
                    </a>
                  )}
                </span>
              </div>
              <div style={{ clear: "both" }} />
            </div>

            {isOpen &&
              service.fullDetails.map((detail, i) => {
                const replyNo = postNo + i + 1;
                return (
                  <div className="chan-reply" key={i}>
                    <div className="chan-postinfo">
                      <span className="name">
                        {REPLY_NAMES[i % REPLY_NAMES.length]}
                      </span>{" "}
                      <span className="date">
                        {POST_DATES[index] ?? "01/01/00(Sat)00:00"}
                      </span>{" "}
                      <span className="postno">
                        No.<a href="#">{replyNo}</a>
                      </span>{" "}
                      <span className="actions">
                        [<a href="#">Reply</a>]
                      </span>
                    </div>
                    <div className="chan-body">
                      <span className="chan-quote">&gt;&gt;{postNo}</span>
                      {"\n"}
                      <span className="chan-greentext">&gt; {detail}</span>
                    </div>
                  </div>
                );
              })}

            {isOpen && (
              <div className="chan-reply">
                <div className="chan-postinfo">
                  <span className="name" style={{ color: "#0000ee" }}>
                    OP
                  </span>{" "}
                  <span className="tripcode">{TRIPCODES[index] ?? "!!anon"}</span>{" "}
                  <span className="date">
                    {POST_DATES[index] ?? "01/01/00(Sat)00:00"}
                  </span>{" "}
                  <span className="postno">
                    No.<a href="#">{postNo + replyCount + 1}</a>
                  </span>
                </div>
                <div className="chan-body">
                  <span className="chan-quote">&gt;&gt;{postNo}</span>
                  {"\n"}
                  Если интересно — пишите. Контакт через Telegram, ответ обычно в тот
                  же день. Email тоже работает.
                  {"\n\n"}
                  <a
                    href="https://t.me/gmakeee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chan-cta-btn"
                  >
                    [Написать в Telegram]
                  </a>
                  <a href="mailto:d.bolvachev@yandex.ru" className="chan-cta-btn">
                    [Email]
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <hr className="chan-rule-line" />
      <div className="chan-postlinks">
        <a href="#">[Top]</a>
        <span style={{ color: "#b07a78", margin: "0 6px" }}>/</span>
        <a href="#services">[Catalog]</a>
        <span style={{ color: "#b07a78", margin: "0 6px" }}>/</span>
        <a href="#">[Archive]</a>
      </div>
    </section>
  );
}
