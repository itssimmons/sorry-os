import { DatabaseSync } from "node:sqlite";
import path from "node:path";

const database = new DatabaseSync(
  path.join(process.cwd(), "database", "database.sqlite")
);

export const METHODS = {
  insert(table: string, data: object) {
    return database
      .prepare(
        `INSERT INTO ${table} (${Object.keys(data)
          .join(", ")
          .trim()}) VALUES (${Array(Object.keys(data).length)
          .fill("?")
          .join(", ")
          .trim()})`
      )
      .run(...Object.values(data));
  },
  findAll(table: string) {
    return database
      .prepare(`SELECT * FROM ${table} ORDER BY createdAt DESC`)
      .all();
  },
};

export default METHODS;
