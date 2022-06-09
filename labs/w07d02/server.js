require('dotenv').config()
console.log(process.env.PORT)
const express = require("express")
const app = express(); // method
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));


const dates = [
    { name: "Bangor", created_at: Date.now() },
    { name: "San Jose", created_at: Date.now() },
    { name: "Bozeman", created_at: Date.now() }
  ];

app.get("/dates", (req,res)=>{
    console.log('req.body is: ', req.body);
    res.send(dates)
})


app.post("/dates", (req,res)=>{
    if(!req.body.name){
        req.body.name = " NO DATA"
    }
    console.log('req.body is: ', req.body);
    req.body.created_at = Date.now();
    dates.push(req.body)
    res.redirect("/dates")
    console.log(dates)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  