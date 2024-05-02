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
const messageRouter = require("./routes/messageRouter");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Chat App is running!");
});

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(` App listening on port ${port}`);
});
