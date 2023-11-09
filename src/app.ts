import express, { Request, Response } from "express";
import cors from "cors";

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

app.listen(8111, () => {
  console.info("Server running at 8111");
});
