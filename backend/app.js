const express = require("express");
const app = express();
require("dotenv").config();
require("./connection/conn");
const cors = require("cors");
const UserAPI = require("./routes/user");

app.use(cors());
app.use(express.json());

app.use("/api/v1", UserAPI);
const PORT = 1000;
app.listen(PORT, () => {
  console.log("Server is listing...");
});
app.use("/", (req, res) => {
  res.send("Hellow from backend side");
});
