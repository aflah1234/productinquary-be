const express = require('express')
const userRouter = express.Router()
const {addUser,login}=require('../controllers/userController.js')

userRouter.post('/signup',addUser)
userRouter.post('/login',login)

module.exports=userRouter