const ChatService = {
  send({ senderId, message }: { senderId: number; message: string }) {
    return fetch("/api/chats/send", {
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
    return fetch("/api/chats/channel", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default ChatService;
