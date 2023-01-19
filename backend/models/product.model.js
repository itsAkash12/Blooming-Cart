// {   
//     "id":0,
//     "images":["" , ""],
//     "name":"",
//     "short_desc":"",
//     "long_desc":"",
//     "price":0,
//     "strike_price":0,
//     "ratings":0,
//     "colors":"green",
//     "delivery_time":3,
//     "sizes":""
const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
   image : {type : Array , required : true},
   name : {type : String , required : true},
   short_desc : {type : String , required : true},
   long_desc : {type : String , required : true},
   price : {type : Number,required : true},
   strike_price : {type : Number},
   rating : {type : Number,required : true},
   colors : {type : String , required : true},
   delivery_time : {type : Number , default : 3},
   sizes : {type : String ,required : true},
   category:{type:String , required:true}

})
const Products = mongoose.model("product" , productSchema)
module.exports = Products