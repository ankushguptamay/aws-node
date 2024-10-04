require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/laksh", (req, res) => {
  res.send("For a beautifull lakshadweep!");
});

app.get("/", (req, res) => {
  res.send("Hello World! Welcome to lakshadweep!");
});

PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
