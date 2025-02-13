import ORM from "@db/orm";

export async function POST(request: Request) {
  const { username, avatar } = await request.json();

  const payload = {
    username,
    avatar,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const { lastInsertRowid } = await ORM.insert("users", payload);

  return Response.json(
    {
      statusText: "created",
      record: { id: lastInsertRowid, ...payload },
    },
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
