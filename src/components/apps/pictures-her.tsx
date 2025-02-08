"use client";

import App from "@/components/ui/app";
import PressableImage from "@/components/pressable-image";
import PressableVideo from "@/components/pressable-video";

const collage = [
  "/pictures/IMG-20220728-WA0069.jpg",
  "/pictures/IMG-20220728-WA0074.jpg",
  "/pictures/IMG-20220728-WA0081.jpg",
  "/pictures/IMG-20221209-WA0023~2.jpg",
  "/pictures/IMG-20240605-WA0066.jpg",
  "/pictures/IMG-20240616-WA0069.jpg",
  "/pictures/IMG-20240701-WA0029.jpg",
  "/pictures/IMG-20241027-WA0021.jpg",
  "/pictures/IMG-20241214-WA0018.jpg",
  "/pictures/IMG-20241229-WA0010.jpg",
  "/pictures/IMG-20250107-WA0015.jpg",
  "/pictures/IMG-20250109-WA0036.jpg",
  "/pictures/VID-20230326-WA0017.mp4",
  "/pictures/VID-20240406-WA0002.mp4",
  "/pictures/VID-20240806-WA0011.mp4",
  "/pictures/VID-20240806-WA0026.mp4",
  "/pictures/VID-20240809-WA0091.mp4",
];

const PicturesApp = () => {
  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/os/808.ico" />
        <App.Title>Yo toda diva 💅</App.Title>
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
            {collage.map((uri, i) => {
              if (uri.endsWith(".mp4")) {
                return (
                  <PressableVideo key={i} src={uri} width={150} height={150} />
                );
              }

              if (uri.endsWith(".jpg") || uri.endsWith(".jpeg")) {
                return (
                  <PressableImage key={i} src={uri} width={150} height={150} />
                );
              }
            })}
          </div>
        </section>
      </App.Window>
    </App.Grid>
  );
};

export default PicturesApp;
