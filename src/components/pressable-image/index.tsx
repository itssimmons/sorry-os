"use client";

import Image from "next/image";
import { useState } from "react";
import Hammer from "react-hammerjs";

import App from "@/components/ui/app";

import styles from "./index.module.css";

const PressableImage = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <section data-image={src}>
      <App.WindowPortal
        icon="/os/757.ico"
        title={src.split("/").at(-1) || "Untitled"}
        height={500}
        width="fit-content"
        useShow={() => [show, setShow]}
      >
        <div style={{ height: "100%", width: "100%" }}>
          <Image
            src={src}
            width={width}
            height={height}
            alt=""
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              aspectRatio: "auto",
              borderRadius: 4,
            }}
          />
        </div>
      </App.WindowPortal>

      <Hammer onDoubleTap={() => setShow(!show)}>
        <div className={styles.image}>
          <Image
            title={src.split("/").at(-1)}
            src={src}
            width={width}
            height={height}
            alt=""
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              aspectRatio: 1 / 1,
              borderRadius: 4,
            }}
          />
          <p>{src.split("/").at(-1)}</p>
        </div>
      </Hammer>
    </section>
  );
};

export default PressableImage;
