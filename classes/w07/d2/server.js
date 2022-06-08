//? DEPENDENCIES
require("dotenv").config();
const express = require("express");
// const fruits = require("./models/fruits");

//? CONFIG
const app = express();
const PORT = process.env.PORT || 3000;

//? ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

//? index
app.get("/fruits/", (req, res) => {
  res.send(fruits);
});

//? show
app.get("/fruits/:id", (req, res) => {
  res.send(fruits[req.params.id]);
});

//? LISTEN
app.listen(PORT, () => {
  console.log(`express listening on ${PORT}`);
});
