"use client";

import Image from "next/image";

import BinApp from "@/components/apps/bin";
import DinoGame from "@/components/apps/dino";
import InternetExplorerApp from "@/components/apps/google-chrome";
import NotepadApp from "@/components/apps/notepad";
import PicturesHimApp from "@/components/apps/pictures-him";
import PicturesBothApp from "@/components/apps/pictures-both";
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
        <NotepadApp title="Notita pa Sandrita &lt;3">
          {`Hola Sandrita bonita, soy Simón del pasado hoy es 8/2/2025 :) te hice esta pagina con el fin de disculparme de una manera original es cierto que tarde casi 2 semanas en hacerla o 1 no recuerdo, el punto es que quiero que sientas que realmente me importa la relación y cosas como estas no las hago solo para quedar bien contigo, esto lo hago porque de corazón TE AMO <3\n\nEstuve haciendo las cosas mal durante mucho tiempo, y pensé que mi problema actual no era una adiccón, lo estuve trabajando mal no siendo constante en mi desarrollo y ocupandome de tantas cosas que luego le dejaba ganar a la adicción.\n\nEntiendo lo tedioso y fastidioso, entre otros muchos sentimientos que debes sentir por esta situación, me sienta mal que tu pagues por mis problemas, me sienta muy mal cuando te trato mal, me enojo, digos cosas que no son o cosas que me voy a arrepentir luego, mucho de mi enojo tambien viene a partir de esta situación tambien es una razón por la cual quiero despejarme de este mal.\n\nEres una mujer increible, linda, fascinante, cariñosa, chistosa, buena onda, buena gente, amable, tienes muchas cualidades y tu puntualidad, intelecto y conscitencia con tus cosas es una de las mejoras que tienes esas cosas en el futuro te servirán mucho, más allá de eso yo a ti te amo por todas estas cosas y por todo lo que eres, pero aunque te faltaran algunas de estas cosas yo te seguiría amando porque todo el cariño que te tengo va más allá de esto. Lo tienes todo y me vuelves loco mi amor es incondicional hacia ti, eres más de lo que necesito en mi vida, me encantaría estar a tu lado por el resto de nuestras vidas.\n\nAmo el tiempo contigo, las risas, chistes, tonterias, pelis, juegos, etc... Cualquier tiempo contigo para mi ya es tiempo de calidad, quiero más de 1 vida a tu lado.\n\nAhora bien, voy a hacer todo lo que esté en mis manos y seré constante en mi progreso, voy a mejorar de una buena vez y ya el libro de ha dado enseñanzas para seguir con el camino de mejorar, está vez haré todo lo que debí hacer todo este tiempo y más desde ya lo prometo.`}
        </NotepadApp>
        <NotepadApp title="Notita secreta 💞">
          {`Hola cariño en esta nota solo quiero desplegar mi amor por ti, eres increible y eres impresionante por ti haria lo que fuera, te amo de aqui hasta la luna de regreso dando 999 vueltas en el aire, por ti lo daria todo, tanto tu cuerpo como tu cara son la cosa más hermosa que me he topado en la vida, no me importa dejarlo todo e iniciar una nueva vida contigo en un país que nunca he estado, más bien para mi seria todo un placer, quiero estar a tu lado y decirte todo lo que te amo en persona tanto con acciones como con palabras, me fascinas de verdad te quiero muchisimo, te amo todavia más, eres todo para mi, estar sin ti ya es estar extrañandote ya es un vacio en mi vida, ya es tristeza para mi, significa mucho para mi el tiempo que pasamos juntos, el cariño y el estar juntos, amo tu presencia, amo tu sonrisa, amo tu cariño y amo cada parte de ti, eres unica en la vida y te voy a cuidar por el resto de mi vida incluso muerto te voy a cuidar no se como pero lo haré\n\nATT: Simoncito, tu chiquito delicioso 🥺\nPARA: Sandrita, mi caramelito muuyy dulce 🍭`}
        </NotepadApp>
        <PicturesHerApp />
        <PicturesBothApp />
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
