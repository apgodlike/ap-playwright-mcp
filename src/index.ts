import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import openAi from "./router/openAi";
import bigBasketRouter from "./router/bigBasket";
import dMartrouter from "./router/dMart";

const port = process.env.PORT || 3020;

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: true,
    /* [
        "http://localhost:3000",
        "http://192.168.29.126:3000",
        //   "http://192.168.140.1:3000",
        "https://kksm.ddns.net",
        "https://kksm.ddns.net",
        //   "https://49.47.217.4",
        "https://kksm.vercel.app",
        "https://api.kovaikongumatrimony.com",
        "https://www.kovaikongumatrimony.com",
      ], */
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Set-Cookie"],
  })
);

app.use("/api/v1/ai", openAi);
app.use("/api/v1/bigbasket", bigBasketRouter);
app.use("/api/v1/dmart", dMartrouter);
// app.use("/hi", (req, res) => {
//   res.sendStatus(201);
// });

app.listen(port, () => {
  console.log(`listening at ${port}`);
});

export default app;
