import express from "express";
import cors from "cors";
import routes from "./routes";

function createApp() {
  const app = express();
  app.use(express.json());

  // const corsOptions = {
  //   origin: "http://localhost:3000",
  //   methods: ["GET"],
  //   credentials: true,
  // };

  app.use(cors());
  app.use("/api", routes);

  return app;
}

export default createApp;
