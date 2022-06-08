//? DEPENDENCIES
require("dotenv").config();
const express = require("express");
const fruits = require("./models/fruits");

//? CONFIG
const app = express();
const PORT = process.env.PORT || 3000;

//? MIDDLEWARE
app.use(express.urlencoded({ extended: false }));

//? ROUTES
app.get("/", (req, res) => {
  //? ?name=simon -> { name: "simon" }
  console.log("query", req.query);
    // res.send("<h2>Hello World<p></h2></p>")
    res.render("form.ejs")
});

//? index
app.get("/fruits/", (req, res) => {
  res.send(fruits);
});

//? show
app.get("/fruits/:id", (req, res) => {
  const fruit = fruits[req.params.id];
  //   res.send(fruits[req.params.id]);
  res.render("show.ejs", { fruit })
//   res.send(`
// <!DOCTYPE html> <html lang="en">
// <head> <meta charset="UTF-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Home Page</title> </head> <body>
//     <h1>${fruit.name}</h1>
// </body>
// </html>
// `);
});

//? create
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits.push(req.body);
  res.send(req.body);
});

//? LISTEN
app.listen(PORT, () => {
  console.log(`express listening on ${PORT}`);
});
