const mongoose = require("mongoose");

const jerseySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  team: {
    type: String,
    required: true,
    trim: true,
  },
  type:{
    type:String,
    enum:['Home',"Away"],
    required:true,
  },
  price:{
    type:Number,
    required:true
  },
  sleeve:{
    type:String,
    enum:['Half','Full'],
    required:true
  },
  stockDetails:[{
    size:{type:String,required:true},
    numberOfStocks:{type:Number,required:true,default:0}
  }],
  description:{
    type:String,
    trim:true
  },
  images:
    [{type:String,required:true}]
});


const Jersey = mongoose.model('Jersey',jerseySchema)
module.exports = Jersey