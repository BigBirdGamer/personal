const mongoose = require("mongoose");
//? Model -> 1st letter in Caps
const Tweet = require("./tweet.js");

//? brew install mongodb 
//? cloud atlas - register -> cloud 
const mongoURI = "mongodb+srv://lucaslee98:S98555941e@cluster0.gfjejyc.mongodb.net/test";

const db = mongoose.connection;

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));
// Connect to Mongo
mongoose.connect(mongoURI);

const doUpdate = async () => {
    try {
      //? findOneAndUpdate => 3 parameters
      const updatedTweet = await Tweet.findOneAndUpdate(
        { title: "Vespa" }, //? criteria
        { likes: 30 }, //? thing to change
      //   { new: true } //? option to see old or new
      );
      console.log(updatedTweet);
    } catch (error) {
      console.log(error);
    }
  };
  doUpdate()
  