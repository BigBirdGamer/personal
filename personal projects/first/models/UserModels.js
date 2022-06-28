const mongoose = require("mongoose")
const { number } = require("prop-types")

const userSchema = mongoose.Schema({
    UserName:String,
    Password: String,
    Name: String,
    Surname: String,
    Email: String,
    Handphone: number,
    Country: String,
    Adress: String,
    Zip: String,
})

module.exports = mongoose.model("User" , userSchema)