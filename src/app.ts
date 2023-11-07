import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    msg: "Hello world",
    name: "John Doe",
  });
});

app.listen(8111, () => {
  console.info("Server running at 8111");
});
