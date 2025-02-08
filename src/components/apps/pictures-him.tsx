"use client";

import App from "@/components/ui/app";
import PressableImage from "@/components/pressable-image";

const collage = [
  "/pictures/20231018_194554.jpg",
  "/pictures/IMG-20240623-WA0028~2.jpeg",
  "/pictures/IMG-20240730-WA0010.jpg",
  "/pictures/IMG-20240807-WA0006.jpeg",
  "/pictures/IMG-20241013-WA0160.jpg",
];

const PicturesApp = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/os/808.ico" />
        <App.Title>Mi Chiquito ✨</App.Title>
      </App.Envelope>
      <App.Window width={500} height="fit-content">
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
      </App.Window>
    </App.Grid>
  );
};

export default PicturesApp;
