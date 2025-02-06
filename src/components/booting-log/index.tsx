"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./index.module.css";

const fps = 15;

const texts = [
  "SorryOS is booting...",
  "Please wait while the system is booting.",
  "Is loading a lot of care and love for you.",
  "Please be patient.",
  "This is a very long time.",
  "Veeeery long time.",
  "Nah I'm kidding :p",
  "I just love you",
  "And I want to be with you",
  "You are everything to me",
  "While this PC is booting I wanted to say all my love",
  "To you",
  "I love you x2",
  "You are the only thing I need",
  "I'll do anything for you",
  "I'm so happy when you are with me",
  "I really appreciate all the love and care you give to me",
  "Thank you for being in my life",
  "You are the best thing that ever happened to me",
  "I want you to know that I really care about our relationship",
  "You are my chiquitita hemosha <3",
  "Logging in to the system in 100%",
  "Redirecting to the login screen...",
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
