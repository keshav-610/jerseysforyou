const express = require('express')
const { dbConnect } = require('./config/config')
const app = express()
const cors = require('cors')
const adminRoutes = require('./routes/adminRoutes')
require('dotenv').config()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Jerseys for You")
})

app.use("/api",adminRoutes)

dbConnect()

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})
