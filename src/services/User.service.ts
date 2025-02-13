const UserService = {
  async login({ username, avatar }: { username: string; avatar: string }) {
    let payload: Partial<User> = { username, avatar };

    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    payload = { id: json.record.id, ...payload };

    const expires = new Date("9999-12-31T23:59:59Z").toUTCString();
    const session = JSON.stringify(payload);
    document.cookie = `messenger_session=${session}; path=/; sameSite=strict; expires=${expires}`;

    return payload;
  },
};

export default UserService;
