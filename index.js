const express = require("express");
const app = express();
const PORT = 5000 || process.env.PORT;
const cors = require("cors");
const { sendEmbed } = require("./requestDiscord");
require("dotenv").config();

app.use(express.static("client/dist"));
app.use(express.json());
app.use(cors());

// routes

app.post("/designs", (req, res) => {
  sendEmbed(req.body);
});
app.get("/", (req, res) => {
  res.send("Get a job");
});

app.get("/designs", (req, res) => {
  res.send("Deisgns api for woter");
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
