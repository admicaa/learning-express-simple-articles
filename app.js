import express from "express";
import dotenv from "dotenv";
import RouteServiceProvider from "./providers/RouteServiceProvider.js";
import mongoose from "mongoose";

const app = new express();
app.use(express.json());

let port = 3000;

new RouteServiceProvider(app);

mongoose.connect(`mongodb://localhost:27017/test`).then((result) => {
  app.listen(port, () => {
    console.info(`App started at port ${port} \n http://localhost:${port}`);
  });
});
