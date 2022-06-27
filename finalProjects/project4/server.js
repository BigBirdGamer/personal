require('dotenv').config()

const express = require("express")
const app = express(); 
const port = process.env.PORT || 3000;
const mongoose = require("mongoose")
const MONGO_URI = process.env.MONGO_URI;


app.get("/", (req,res)=>{
res.send("Test Success")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

