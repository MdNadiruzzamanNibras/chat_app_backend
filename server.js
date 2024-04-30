const express = require("express");
require("dotenv").config();
const data = require("./Data/data");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("./config/db");
const { notFound, errorHandler } = require("./Middleware/errorMiddleware");
const userRouter = require("./routes/userRouter");
const chatRouter = require("./routes/chatRouter");
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Chat App is running!");
});
app.get("/api/chat", (req, res) => {
  const datas = data;
  res.send(datas);
});
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(` App listening on port ${port}`);
});
