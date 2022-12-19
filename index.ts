import express, { Application, Response, Request } from "express";

const port: number = 2022;

const app: Application = express();

require("./config/db");
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "server is up and running 🔥🔥",
  });
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
