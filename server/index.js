import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";


import postRoutes from "./routes/postRoutes.js";


dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const connectionString = process.env.MONGO_URL;
const port = process.env.PORT || 5000;


app.use("/posts", postRoutes);





mongoose
  .connect(connectionString)
  .then(() =>
    app.listen(port, () => console.log(`Server is running on port ${port}`))
  )
  .catch((err) => console.log(err));

