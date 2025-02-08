"use client";

import App from "@/components/ui/app";

const BinApp = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/os/270.ico" />
        <App.Title>Papelera</App.Title>
      </App.Envelope>
      <App.Window width={500} height={500}>
        <section style={styles.table}>
          <div>
            <div style={styles.thead}>
              <div style={styles.th}>Nombre</div>
              <div style={styles.th}>
                <p
                  style={{
                    width: 110,
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  Fecha de modificación
                </p>
              </div>
              <div style={styles.th}>Tamaño</div>
              <div style={styles.th}>Clase</div>
            </div>
          </div>
          <div style={styles.tbody}>
            {body.map((item, i) => (
              <div
                style={{
                  ...styles.tr,
                  backgroundColor:
                    i % 2 !== 0 ? "hsl(0 0% 0% / 0.12)" : "transparent",
                }}
                key={i}
              >
                <div>{item.name}</div>
                <div>{item.date}</div>
                <div>{item.size}</div>
                <div>{item.class}</div>
              </div>
            ))}
          </div>
        </section>
      </App.Window>
    </App.Grid>
  );
};

export default BinApp;

const styles: { [k: string]: React.CSSProperties } = {
  table: {
    width: "100%",
    height: "100%",
    color: "black",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "20px 1fr",
  },
  thead: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    // justifyItems: "start",
    // alignItems: "center",
    columnGap: 3,
    fontWeight: 700,
    fontSize: 12,
    fontFamily: "var(--font-matrix-dots)",
  },
  th: {
    display: "flex",
    alignItems: "center",
    paddingInline: 4,
    height: 20,
    width: "100%",
    backgroundColor: "hsl(0 0% 0% / 0.12)",
    borderRadius: 2,
  },
  tr: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    // justifyItems: "start",
    // alignItems: "center",
    height: 20,
    borderRadius: 2,
  },
  tbody: {
    fontSize: 14,
    fontFamily: "var(--font-system)",
    overflowY: "scroll",
  },
};

const body = [
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
  { name: "Bla Bla.mp3", date: "ayer, 23:59", size: "1.00 MB", class: "Audio" },
];
