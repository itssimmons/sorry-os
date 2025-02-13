import ORM from "@db/orm";

export async function GET() {
  const chats = await ORM.findAll("chats");

  return Response.json(chats, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
