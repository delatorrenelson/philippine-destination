import Database from "better-sqlite3";

const db = new Database("sqlite.db");

console.log("Checking SQLite database schema...");

function addColumnIfNotExists(table: string, column: string, type: string) {
  const pragma = db.pragma(`table_info(${table})`) as Array<{ name: string }>;
  const columnExists = pragma.some((col) => col.name === column);
  if (!columnExists) {
    console.log(`Adding missing column '${column}' to '${table}' table...`);
    db.exec(`ALTER TABLE ${table} ADD COLUMN ${column} ${type};`);
  } else {
    console.log(`Column '${column}' already exists in '${table}'.`);
  }
}

try {
  addColumnIfNotExists("account", "issuer", "TEXT");
  addColumnIfNotExists("user", "banned", "INTEGER");
  addColumnIfNotExists("user", "banReason", "TEXT");
  addColumnIfNotExists("user", "banExpires", "DATE");
  console.log("Database schema update complete.");
} catch (err) {
  console.error("Error altering DB schema:", err);
}
