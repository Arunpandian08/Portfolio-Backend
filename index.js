import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routers from "./Routers/PortfolioRouters.js";

dotenv.config();
const app = express();
app.use(cors({
    origin:'http://localhost:5173'
}));

app.use(express.json());
const Port = process.env.PORT;

app.use("/api",routers);

app.listen(Port, () => {
  console.log("App is Running at Port", Port);
});
