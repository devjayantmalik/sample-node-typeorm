# Hello, There

This is most simple project structure for NodeJs and TypeORM configuration with `ormconfig.ts` extension.

## Stackoverflow

Checkout this answer on stackoverflow at:
[https://stackoverflow.com/questions/52187328/how-to-specify-ormconfig-ts-for-typeorm](https://stackoverflow.com/questions/52187328/how-to-specify-ormconfig-ts-for-typeorm)

## Project Structure

```txt
.
├── src // Typescript files
│   ├── entities
│   │   └── User.ts
│   ├── db
│   │   └── ormconfig.ts
│   │   ├── migrations
│   │   │   └── ... // migration files
├── tsconfig.json
├── package.json
```

## Requirements

- Typeorm should be able to use `src/db/ormconfig.ts` file for connection.
- We should be able to create `migrations`, and perform all typeorm cli supported operations using `src/db/ormconfig.ts`
  file.

## Possiblility

We might be able to accomplish this using `ts-node` package available for typescript.

## Solution and Github Link

Please checkout
[https://github.com/devjayantmalik/sample-node-typeorm](https://github.com/devjayantmalik/sample-node-typeorm) for
complete example.

> Contents of `src/db/ormconfig.ts` file are:

```ts
import path from "path";
import { ConnectionOptions } from "typeorm";

export default {
  name: "default",
  type: "better-sqlite3",
  database: ":memory:",
  synchronize: true,
  migrationsRun: true,
  dropSchema: false,
  entities: [path.join(__dirname, "..", "entities", "**", "*.*"), path.join(__dirname, "..", "entities", "*.*")],
  migrations: [path.join(__dirname, "migrations", "*.*")],
  cli: {
    entitiesDir: path.join(__dirname, "..", "entities"),
    migrationsDir: path.join(__dirname, "migrations")
  }
} as ConnectionOptions;
```

> Script section of `src/db/package.json` file are:

````json
"scripts": {
  "dev": "ts-node-dev src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js",
  "typeorm": "ts-node ./node_modules/.bin/typeorm -f ./src/db/ormconfig.ts",
  "migration:generate": "yarn run typeorm migration:generate -n",
  "migration:blank": "yarn run typeorm migration:create -n"
},```

## Usage

```bash
# Generate a blank migration
yarn migration:blank migration-name-here

# Generate migrations from database and entities.
yarn migration:generate

# Roll back a migration using cli options.
yarn typeorm migration:down
````
