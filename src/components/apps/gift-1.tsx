"use client";

import App from "@/components/ui/app";
import PressableImage from "../pressable-image";

const collage = [
  "/pictures/extra/gift-card.png",
  "/pictures/extra/sticker-1.jpg",
  "/pictures/extra/sticker-2.jpg",
];

const GiftApp = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/gift.png" />
        <App.Title>Regalicos</App.Title>
      </App.Envelope>
      <App.Window width={555} height={333}>
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

export default GiftApp;
