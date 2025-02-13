import { DatabaseSync } from "node:sqlite";
import path from "node:path";

const database = new DatabaseSync(
  path.join(process.cwd(), "database", "database.sqlite")
);

database.exec(`CREATE TABLE IF NOT EXISTS chats (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	senderId INTEGER NOT NULL,
	message TEXT NOT NULL,
	mimeType TEXT NOT NULL DEFAULT 'text/plain',
	createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
)`);
