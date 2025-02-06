"use client";

import Image from "next/image";

import {
	AppEnvelope,
	AppGrid,
	AppIco,
	AppTitle,
	AppWindow,
} from "@/components/ui/app";

const collage = [
  "/os/120.ico",
  "/os/120.ico",
  "/os/270.ico",
  "/os/422.ico",
  "/os/120.ico",
  "/os/120.ico",
  "/os/270.ico",
  "/os/404.ico",
  "/os/418.ico",
  "/os/422.ico",
  "/os/436.ico",
];

const PicturesApp = () => {
  return (
    <AppGrid>
      <AppEnvelope>
        <AppIco src="/os/422.ico" />
        <AppTitle>Fotos</AppTitle>
      </AppEnvelope>
      <AppWindow width={500} height={450}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            gridTemplateRows: "repeat(auto-fill, minmax(100px, 1fr))",
						placeItems: "center",
            gap: 10,
          }}
        >
          {collage.map((uri, i) => (
            <Image key={i} src={uri} alt="" width={100} height={100} />
          ))}
        </div>
      </AppWindow>
    </AppGrid>
  );
};

export default PicturesApp;
