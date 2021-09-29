require("reflect-metadata");
import express from "express";
import { createConnection } from "typeorm";
import ormconfig from "./db/ormconfig";

const main = async (): Promise<void> => {
  const app = express();

  const conn = await createConnection(ormconfig);
  console.log(conn.isConnected ? `Database connected...` : `Database is not connected...`);

  app.get("/", (_req, res, _next) => {
    return res.json({
      success: true,
      message: "You should also checkout /your-name route on this website. e.g - http://localhost:4000/Jayant Malik"
    });
  });

  app.get("/:name", (req, res, _next) => {
    return res.json({ success: true, message: `We love you Mr./Ms. ${req.params.name}..` });
  });

  const port = Number(process.env.PORT) || 4000;
  app.listen(port, () => {
    console.log(`Server started at: https://localhost:${port}`);
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
