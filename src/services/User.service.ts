const UserService = {
  login({ username, avatar }: { username: string; avatar: string }) {
    return fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        avatar,
      }),
    });
  },
};

export default UserService;
