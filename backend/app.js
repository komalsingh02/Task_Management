const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/conn");
app.use("/", (req, res) => {
  res.send("Hellow from backend side");
});
const PORT = 1000;
app.listen(PORT, () => {
  console.log("Server is listing...");
});
