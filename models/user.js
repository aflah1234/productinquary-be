const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    userName:String,
    email:String,
    password:String
})

const User = mongoose.model('users',userSchema)

module.exports= User;