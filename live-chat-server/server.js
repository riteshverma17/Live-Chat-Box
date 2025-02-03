const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Message = require("./models/messageModel");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.log("MongoDB not connected " + err.Message);
  }
};
connectDb();



app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(PORT, console.log("Server is running..."));
