require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const db = mongoose.connection
const MONGO_URI= process.env.MONGO_URI
port = 3001


mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json())


app.get("/", (req,res)=>{
    res.send("Test")
})

app.listen(port,()=>{
    console.log("express is on port ",port )
})

