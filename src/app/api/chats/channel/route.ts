import ORM from "@db/orm";

export async function GET() {
  const chats = await ORM.sql(
    `SELECT * FROM chats
    INNER JOIN users 
    ON chats.senderId = users.id
    ORDER BY createdAt DESC`
  ).all();

  return Response.json(chats, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
