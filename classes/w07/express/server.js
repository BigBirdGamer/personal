const express = require("express")
const app = express(); // method
const port = 3000;

//? get => method call
// 2 arguments
// 1st argument => string => route
// 2nd argument is a call back

const plants = [
    "Monstera Deliciosa",
    "Corpse Flower",
    "Elephant-Foot Yam",
    "Witches' Butter",
];

app.get("/hi/:who", (req, res) => {
  console.log("Params " , req.params);
  console.log("Query " , req.query)
  res.send(`Hi ${req.params.who}`);
});

app.get("/hello/:firstname/:lastname", (req, res) => {
    console.log(req.params);
    res.send("hello " + req.params.firstname + " " + req.params.lastname);
  });

app.get("/:indexOfPlantsArray", (req, res) => {
  const pos = req.params.indexOfPlantsArray;
  res.send(plants[pos]);
   // error cannot send more than one response!
//    res.send("this is the index: " + pos);
});

app.get("/fixed/:indexOfPlantsArray", (req, res) => {
    const pos = req.params.indexOfPlantsArray
    if (plants[pos]) {
      res.send(plants[pos]);
    } else {
      res.send(
        "cannot find anything at this index: " + pos
      );
    }
  });


app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
