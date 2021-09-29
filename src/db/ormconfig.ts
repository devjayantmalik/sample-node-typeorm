import path from "path";
import { ConnectionOptions } from "typeorm";
import { __TEST__ } from "../constants";

// TODO: Enable db caching using redis.
export default {
  name: "default",
  type: "better-sqlite3",
  database: ":memory:",
  synchronize: true,
  migrationsRun: true,
  dropSchema: __TEST__,
  entities: [path.join(__dirname, "..", "entities", "**", "*.*"), path.join(__dirname, "..", "entities", "*.*")],
  migrations: [path.join(__dirname, "migrations", "*.*")],
  cli: {
    entitiesDir: path.join(__dirname, "..", "entities"),
    migrationsDir: path.join(__dirname, "migrations")
  }
} as ConnectionOptions;
