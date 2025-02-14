import { BASE_URL } from "@/env";

const ChatService = {
  send({ senderId, message }: { senderId: number; message: string }) {
    return fetch(`${BASE_URL}/v1/chats/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderId,
        message,
      }),
    });
  },
  channel() {
    return fetch(`${BASE_URL}/v1/chats/channel`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default ChatService;
