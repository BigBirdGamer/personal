//? DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const fruits = require("./models/fruits");
const log = require("debug")("fruits:server")

//? CONFIG
const app = express();
const PORT = process.env.PORT || 3000;

//? MIDDLEWARE
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public")); 

//? ROUTES
app.get("/", (req, res) => {
  //? ?name=simon -> { name: "simon" }
  log(`query %o`, req.query);
    // res.send("<h2>Hello World<p></h2></p>")
    res.render("form.ejs")
});

//? index
app.get("/fruits/", (req, res) => {
  res.send(fruits);
});

// put this above your show.ejs file
app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});

//? show
app.get("/fruits/:id", (req, res) => {
  const fruit = fruits[req.params.id];
  res.render("show.ejs", { fruit })
});

app.delete("/fruits/:id", (req, res) => {
  const { id } = req.params;
  fruits.splice(id, 1);
  // res.send("delete")
  res.redirect('/fruits');
})

app.put("/fruits/:id", (req, res) => {
  const { id } = req.params;
  if (req.body.readyToEat === "on") {
    // if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    // if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits[id] = req.body
  // res.send(req.body)
  res.redirect("/fruits")
})

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
  // res.send(req.body);
  res.redirect("/fruits");
});

//? LISTEN
app.listen(PORT, () => {
  console.log(`express listening on ${PORT}`);
});
