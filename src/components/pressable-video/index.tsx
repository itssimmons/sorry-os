"use client";

import { useState } from "react";
import Hammer from "react-hammerjs";

import App from "@/components/ui/app";
import withPortal from "@/hoc/withPortal";

import styles from "./index.module.css";

const PressableVideo = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  const [show, setShow] = useState<boolean>(false);

  const WindowPortal = withPortal(
    <App.Window
      icon="/os/757.ico"
      title={src.split("/").at(-1)}
      height={500}
      width="fit-content"
      useShow={() => [show, setShow]}
    >
      <div style={{ height: "100%", width: "100%" }}>
        <video
          controls
          width={width}
          height={height}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            aspectRatio: "auto",
            borderRadius: 4,
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </App.Window>
  );

  return (
    <section data-image={src}>
      <WindowPortal />

      <Hammer onDoubleTap={() => setShow(!show)}>
        <div className={styles.video}>
          <video
            title={src.split("/").at(-1)}
            src={src}
            width={width}
            height={height}
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

export default PressableVideo;
