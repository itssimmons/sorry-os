"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import ArrowRight from "@/components/icon/arrow-right";
import Input from "@/components/ui/input";

import styles from "./page.module.css";

const tips = [
  "Es una fecha muy especial <3",
  "Puede ser tuya o mia",
  "Incluso puede ser de ambos",
  "El formato puede ser o DD/MM o DDMM o YYYY",
];

export default function Page() {
  const router = useRouter();
  const [tipId, setTipId] = useState<number>(-1);

  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const data = Object.fromEntries(
      new FormData(ev.target as HTMLFormElement)
    ) as Credentials;

    const possiblePasswords = [
      "01/07",
      "18/10",
      "29/08",
      "24/07",
      "0107",
      "1810",
      "2908",
      "2407",
      "2003",
      "2002",
      "2018",
    ];

    if (possiblePasswords.includes(data.password)) {
      document.cookie = `isAuthenticated=true; path=/; max-age=31536000; sameSite=strict`;
      router.push("/os");
    } else {
      setTipId((i) => (i + 1) % tips.length);
    }
  };
  return (
    <main className={styles.page}>
      <section className={styles.authentication}>
        <div className={styles.logo}>
          <Image src="/os.webp" alt="SorryOS Logo" width={64} height={64} />
          <p>SorryOS</p>
        </div>

        <span className={styles.separator} />

        <section className={styles.profile}>
          <div className={styles.avatar}>
            <Image
              className={styles.avatar}
              src="/avatar.webp"
              alt="SorryOS Logo"
              width={90}
              height={90}
            />
            <b>Sandy ✨</b>
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <Input name="password" type="password" />
            <button type="submit">
              <ArrowRight />
            </button>
          </form>

          <strong className={styles.tip}>{tips[tipId] ?? "‎"}</strong>
        </section>
      </section>
    </main>
  );
}
