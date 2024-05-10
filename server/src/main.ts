import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = `${process.env.PORT || "3001"}`;

// Set up CORS
const corsOptions = {
  origin: process.env.CLIENT || "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(express.json());

app.use(cors(corsOptions));

app.get("/healthcheck", (req: Request, res: Response) => {
  res.send("All systems go!");
});

app.listen(parseInt(port), () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
