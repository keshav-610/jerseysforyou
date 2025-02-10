const express = require('express')
const app = express()
require('dotenv').config()
app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})