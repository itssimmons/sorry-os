"use client";

import Image from "next/image";

import BinApp from "@/components/apps/bin";
import DinoGame from "@/components/apps/dino";
import InternetExplorerApp from "@/components/apps/google-chrome";
import NotepadApp from "@/components/apps/notepad";
import PicturesHimApp from "@/components/apps/pictures-him";
import PicturesHerApp from "@/components/apps/pictures-her";
import TetrisGame from "@/components/apps/tetris";
import MineSweeperGame from "@/components/apps/minesweeper";
import PacmanGame from "@/components/apps/pacman";
import SnakeGame from "@/components/apps/snake";
import Clock from "@/components/clock";

import styles from "./page.module.css";


export default function Page() {
  return (
    <main className={styles.page}>
      <section id="desktop" className={styles.desktop}>
        <BinApp />
        <NotepadApp />
        <PicturesHerApp />
        <PicturesHimApp />
        <TetrisGame />
        <DinoGame />
        <PacmanGame />
        <SnakeGame />
        <MineSweeperGame />
        <InternetExplorerApp />
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
