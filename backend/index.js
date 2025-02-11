const express = require('express')
const { dbConnect } = require('./config/config')
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send("Jerseys for You")
})

dbConnect()

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})
