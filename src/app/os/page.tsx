"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import BinApp from "@/components/apps/bin";
import NotepadApp from "@/components/apps/notepad";
import PicturesApp from "@/components/apps/pictures";

import styles from "./page.module.css";

const Clock = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [binary, setBinary] = useState<1 | 0>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setBinary((binary) => (binary === 0 ? 1 : 0));
    }, 800);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000 * 60);

    return () => clearInterval(id);
  }, []);

  return (
    <p className={styles.time}>
      {time.getHours().toString().padStart(2, "0")}
      <span style={{ color: binary === 0 ? "unset" : "transparent" }}>:</span>
      {time.getMinutes().toString().padStart(2, "0")}
    </p>
  );
};

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.desktop}>
        <BinApp />
        <NotepadApp />
        <PicturesApp />
      </section>

      <footer className={styles.taskbar}>
        <button>
          <Image src="/os.webp" alt="SorryOS Logo" width={24} height={24} />
          <p>Start</p>
        </button>

        <ul className={styles.tray}>
          <li>
            <Image src="/os/120.ico" alt="" width={20} height={20} />
          </li>
          <li>
            <Clock />
          </li>
        </ul>
      </footer>
    </main>
  );
}
