"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./index.module.css";

const fps = 12;

const texts = [
  "SorryOS está iniciando...",
  "Espera mientras el sistema se carga...",
  "Está cargando un moootonnn de cosas...",
  "Por favor, sea paciente...",
  "Puede tardar un rato...",
  "Tal vez ese rato sea 1 hora :D",
  "Es broma, no tarda tanto :p",
  "Mientras esperas te doy un poco de cariño ¿Por qué no?",
  "Hola........ Te Amo Mucho <3",
  "Y quiero estar contigo.",
  "Lo eres todo para mí.",
  "Te AMOOO x2",
  "Eres todo lo que quiero en la vida.",
  "Literal lo haría todo por tí.",
  "No sabes lo feliz que soy cuando estoy contigo.",
  "De verdad aprecio todo el cariño que me das.",
  "Gracias por estar en mi vida.",
  "Y gracias por todo lo que has ayudado a mejorar.",
  "Eres lo mejor que me ha podido pasar en la vida.",
  "Quiero que sepas que de verdad me importa mucho nuestra relación.",
  "Eres mi chiquitita peshosa :)))",
  "Por cierto, el sistema ya había cargado :D",
  "Solo te quería escribir mensajes bonitos :p",
  "Redireccionando a la página de inicio de sesión...",
];

export default function BootingLog() {
  const router = useRouter();
  const [logIndex, setLogIndex] = useState<number>(0);

  const history = useMemo(() => texts.slice(0, logIndex), [logIndex]);

  const onComplete = () => {
    if (logIndex >= texts.length - 1) {
      router.push("/login");
      return;
    }

    setLogIndex(logIndex + 1);
  };

  return (
    <div className={styles.colText}>
      {history.map((text, i) => (
        <p key={i}>&gt; {text}</p>
      ))}

      {texts?.[logIndex] && (
        <Log text={texts[logIndex]} onComplete={onComplete} />
      )}
    </div>
  );
}

const Log = (props: { text: string; onComplete: VoidFunction }) => {
  const [index, setIndex] = useState<number>(0);
  const [construction, setConstruction] = useState<string>("");

  useEffect(() => {
    if (index >= props.text.length) {
      setIndex(0);
      setConstruction("");
      props.onComplete();
      return;
    }

    const id = setInterval(() => {
      setIndex(index + 1);
    }, 1000 / fps);

    return () => clearInterval(id);
  }, [index, props.text]);

  useEffect(() => {
    setConstruction((c) => [...c, props.text[index]].join(""));
  }, [index, props]);

  return <p>&gt; {construction}</p>;
};
