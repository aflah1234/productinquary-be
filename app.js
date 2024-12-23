const express = require('express')
const mongoose = require('mongoose')
const productRouter =require('./routers/productRouter')
const userRouter =require('./routers/userRouter')
const jwt = require('jsonwebtoken')
const cors = require('cors')
require('dotenv').config()
const app=express()

app.use(express.json())
app.use(cors())
// app.post('/login',(req,res)=>{



//     const username = req.body.username
//     const user={name:username}
//     const secretKey = process.env.JWT_SECRET_KEY
//     const token=jwt.sign(user,secretKey)
//     res.json({accesstoken:token})
    
// })

app.use('./products',productRouter)
app.use('/users',userRouter)

async function main() {
    await mongoose.connect(process.env.DB_URL);
}  

main()
.then(()=>console.log("DB connected"))
.catch((err) => console.log(err));




const ProductData = require('./models/product')
const PORT= 3001
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));