import { DatabaseSync } from "node:sqlite";
import path from "node:path";

const database = new DatabaseSync(
  path.join(process.cwd(), "database", "database.sqlite")
);

database.exec(`CREATE TABLE IF NOT EXISTS users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	username TEXT NOT NULL,
	avatar TEXT NOT NULL,
	createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
)`);
