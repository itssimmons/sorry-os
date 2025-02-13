import ORM from "@db/orm";

export async function POST(request: Request) {
  const { senderId, message } = await request.json();

  const payload = {
    senderId,
    message,
    mimeType: "text/plain",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await ORM.insert("chats", payload);

  return Response.json(
    {
      statusText: "created",
      record: payload,
    },
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
