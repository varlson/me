import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
import router from "./routes";
import dotenv from "dotenv";
dotenv.config();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    msg: "Hello world",
    name: "John Doe",
  });
});

app.use("/api", router);

app.listen(8111, async () => {
  const url = process.env.DATABASE_URL;
  mongoose
    .connect(url as string)
    .then(() => {
      console.info("Server running at 8111");
    })
    .catch((error) => {
      console.info("server cant be started");
      console.info(error);
    });
});
