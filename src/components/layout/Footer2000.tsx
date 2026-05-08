export function Footer2000() {
  return (
    <footer
      style={{
        marginTop: 24,
        paddingBottom: 24,
        textAlign: "center",
        fontFamily: "arial, sans-serif",
        fontSize: 11,
        color: "#800",
      }}
    >
      <hr style={{ border: "none", borderTop: "1px solid #d9bfb7", margin: "8px 0" }} />
      <div style={{ marginBottom: 6 }}>
        <a href="#">[Home]</a>{" "}
        <span style={{ color: "#b07a78" }}>/</span>{" "}
        <a href="#services">[/dev/]</a>{" "}
        <span style={{ color: "#b07a78" }}>/</span>{" "}
        <a href="#">[FAQ]</a>{" "}
        <span style={{ color: "#b07a78" }}>/</span>{" "}
        <a href="#">[Rules]</a>{" "}
        <span style={{ color: "#b07a78" }}>/</span>{" "}
        <a href="https://t.me/gmakeee" target="_blank" rel="noopener noreferrer">
          [Contact]
        </a>{" "}
        <span style={{ color: "#b07a78" }}>/</span>{" "}
        <a href="mailto:d.bolvachev@yandex.ru">[Email]</a>
      </div>
      <div style={{ color: "#555" }}>
        - gmakeee imageboard - © 2000 - All trademarks and copyrights on this page
        are owned by their respective parties.
      </div>
      <div style={{ marginTop: 4, color: "#999" }}>
        Posts are the responsibility of their respective posters.
      </div>
    </footer>
  );
}
