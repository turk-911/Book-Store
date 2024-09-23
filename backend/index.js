import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const mongoDBURL = "your_database_link_here";
const port = 5555;
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To Book Store");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
