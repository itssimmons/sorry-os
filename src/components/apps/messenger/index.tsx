"use client";

import { ArrowUpRightSmall } from "geist-icons";
import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import App from "@/components/ui/app";
import useMessenger from "@/hooks/useMessenger";
import ChatService from "@/services/Chat.service";
import UserService from "@/services/User.service";

import styles from "./index.module.css";

const MessengerApp = () => {
  const { session } = useMessenger();

  return (
    <App.Grid>
      <App.Envelope>
        <App.Ico src="/logos/messenger.webp" />
        <App.Title>Messenger</App.Title>
      </App.Envelope>
      <App.Window width={550} height={700}>
        {!session && <LogIn />}
        {session && <GlobalChannel />}
      </App.Window>
    </App.Grid>
  );
};

const LogIn = () => {
  const { setSession } = useMessenger();

  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const logIn = async (ev: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);

    ev.preventDefault();

    const data = Object.fromEntries(
      new FormData(ev.target as HTMLFormElement)
    ) as { username: string; avatar: string };

    try {
      const payload = (await UserService.login({
        username: data.username,
        avatar: data.avatar,
      })) as User;

      setSession(payload);
    } finally {
      new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
        setLoading(false)
      );
    }

    setAvatarUrl(data.avatar);
  };

  return (
    <main className={styles.loggedIn}>
      {!loading && (
        <form className={styles.logInForm} onSubmit={logIn}>
          <div className={styles.profile}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={avatarUrl} alt="Avatar" width={90} height={90} />
            <input
              type="text"
              name="avatar"
              value={avatarUrl}
              onChange={(ev) => setAvatarUrl(ev.target.value)}
              placeholder="Avatar (ej. https://avatars.githubusercontent.com/u/123456?v=4)"
              className={styles.input}
            />
          </div>
          <div className={styles.credentials}>
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              className={styles.input}
            />
            <button type="submit" className={styles.submit}>
              Ingresar
            </button>
          </div>
        </form>
      )}
      {loading && <Loader />}
    </main>
  );
};

const GlobalChannel = () => {
  const { session } = useMessenger();

  const [chats, setChats] = useState<Chat[]>([]);
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const getChats = async () => {
      await ChatService.channel()
        .then((response) => response.json())
        .then((data) => {
          setChats(
            data.map((chat: Chat) => ({
              id: chat.id,
              senderId: chat.senderId,
              message: chat.message,
              avatar: chat.avatar,
              username: chat.username,
              mimeType: chat.mimeType,
              createdAt: chat.createdAt,
              updatedAt: chat.updatedAt,
            }))
          );
        });
    };

    getChats();
    setInterval(getChats, 15000); // each 15s
  }, []);

  const handleSend = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const data = Object.fromEntries(
      new FormData(ev.target as HTMLFormElement)
    ) as { message: string };

    await ChatService.send({
      senderId: session!.id,
      message: data.message,
    });

    setChats((chats) => [
      {
        id: chats.length + 1,
        message: data.message,
        senderId: session!.id,
        avatar: session!.avatar,
        username: session!.username,
        mimeType: "text/plain",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      ...chats,
    ]);

    setText("");
  };

  return (
    <main className={styles.channel}>
      <header className={styles.channelHeader}>
        <h1>🌍 Global Channel</h1>
      </header>

      <section className={styles.messages}>
        {chats.map((chat, i) => {
          console.log(session!.id);
          const itsMe = chat.senderId === session!.id;

          return (
            <article key={i} data-itsme={itsMe} className={styles.message}>
              <header>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  src={chat.avatar}
                  width={20}
                  height={20}
                  alt=""
                />

                <div role="metadata">
                  <strong>
                    {`${itsMe ? "Tú (" : ""}${chat.username}${
                      itsMe ? ") dices:" : " dice:"
                    }`}
                  </strong>
                </div>
              </header>
              <p role="content">{chat.message}</p>
            </article>
          );
        })}
      </section>

      <form className={styles.form} onSubmit={handleSend}>
        <input
          type="text"
          name="message"
          placeholder="Escribe aquí tu mensaje..."
          className={styles.input}
          value={text}
          onChange={(ev) => setText(ev.target.value)}
        />
        <button type="submit" className={styles.submit}>
          <ArrowUpRightSmall />
        </button>
      </form>
    </main>
  );
};

export default MessengerApp;
