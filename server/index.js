import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import postRoutes from "./routes/postRoutes.js";

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "https://gallery-client-nu.vercel.app" }));

const connectionString = process.env.MONGO_URL;
const port = process.env.PORT || 5000;

app.use("/posts", postRoutes);
app.get("/", (req, res) => res.send("Hello"));

mongoose
  .connect(connectionString)
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port ${port}`))
  )
  .catch((err) => console.log(err));
