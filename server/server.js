const express = require("express");
const mongoose = require("mongoose");
// const logger = require("morgan");
const burgerRouter = require("./routes/burger-router");

const PORT = process.env.PORT || 8000;

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/api", burgerRouter);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/menu", {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
