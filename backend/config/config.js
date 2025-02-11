const mongoose = require('mongoose')

const dbConnect =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB Connected Successfully"))
    } catch (error) {
        console.log(error)
    }
}


module.exports = {dbConnect}