"use client";

import App from "@/components/ui/app";
import PressableImage from "@/components/pressable-image";

const collage = [
  "/pictures/both/IMG-20230304-WA0026.jpg",
  "/pictures/both/IMG-20231122-WA0068.jpg",
  "/pictures/both/IMG-20231205-WA0015.jpg",
  "/pictures/both/IMG-20231205-WA0016.jpg",
  "/pictures/both/IMG-20231220-WA0022.jpg",
  "/pictures/both/IMG-20240206-WA0083.jpg",
  "/pictures/both/IMG-20240221-WA0031.jpg",
  "/pictures/both/IMG-20240514-WA0095.jpeg",
  "/pictures/both/IMG-20241013-WA0162.jpg",
  "/pictures/both/IMG-20241021-WA0001.jpg",
  "/pictures/both/Screenshot_20231221_120329_Instagram.jpg",
  "/pictures/both/Screenshot_20231221_134535_Instagram.jpg",
  "/pictures/both/Screenshot_20240125_185547_Instagram.jpg",
  "/pictures/both/Screenshot_20240210_191428_Instagram.jpg",
  "/pictures/both/Screenshot_20240222_205139_WhatsApp.jpg",
  "/pictures/both/Screenshot_20240512_134529_Snapchat.png",
  "/pictures/both/Screenshot_20240512_134558_Snapchat.png",
  "/pictures/both/Screenshot_20240512_134750_Snapchat.png",
  "/pictures/both/Screenshot_20240512_134927_Snapchat.png",
  "/pictures/both/Screenshot_20240910_185107_WhatsApp.png",
  "/pictures/both/Screenshot_20240910_233938_WhatsApp.png",
  "/pictures/both/Screenshot_20241013_190550_WhatsApp.png",
  "/pictures/both/Screenshot_20241015_123336_WhatsApp.png",
  "/pictures/both/Screenshot_20241023_171848_WhatsApp.png",
  "/pictures/both/Screenshot_20241026_215718_WhatsApp.png",
];

const PicturesApp = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/os/808.ico" />
        <App.Title>Nosotros 👫🏻✨</App.Title>
      </App.Envelope>
      <App.Window width={500} height={369}>
        <section style={{ height: "100%", width: "100%", overflowY: "scroll" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
              gridTemplateRows: "repeat(auto-fill, minmax(150px, 1fr))",
              placeItems: "center",
              gap: 6,
            }}
          >
            {collage.map((uri, i) => (
              <PressableImage key={i} src={uri} width={150} height={150} />
            ))}
          </div>
        </section>
      </App.Window>
    </App.Grid>
  );
};

export default PicturesApp;
