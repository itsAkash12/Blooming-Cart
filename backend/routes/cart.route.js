const express = require("express")
const Carts = require("../models/cart.model")
const app = express()
const authenticator = require("../middlewares/authenticator")
app.use(express.json())

// Get All Data in Cart

app.get("/" ,authenticator , async(req,res)=>{
    const {userID} = req.body
    try{
       let AllCartData = await Carts.find({userID:userID})
       if(AllCartData.length>0){
          res.send(AllCartData)
       }else{
        res.send("You Have Not Added Any Data In Cart")
       }
    }catch(e){
        res.send(e.message)
    }
})


// Add Product in Cart

app.post("/",authenticator,async(req,res)=>{
    const {category , image , productname , price , strike_price , size , quantity,userID} = req.body
    // console.log(req.body)
    try{
     let addProductToCart = new Carts({delivery_time:3 , category : category , image : image , productname : productname , price : price , strike_price : strike_price ,  size : size  , quantity : quantity , userID:userID})
     await addProductToCart.save()
     res.send("Add Item To Cart")
    }catch(e){
        res.send(e.message)
    }
})

// Delete product from cart

app.delete("/:id", authenticator,async(req,res)=>{
    let id = req.params.id
    
    try{
        let Product = await Carts.findById(id)
    let logger_userID = req.body.userID;
    let product_userID = Product.userID
    // console.log(logger_userID,product_userID)
    if(logger_userID === product_userID){
        if(Product){
            let deleteProduct = await Carts.findByIdAndDelete(id)
            res.send("Remove Item from Cart")
        }
        else{
            res.send("Already Removed from Cart,Please refresh the page")
        }
    }
    else{
        res.send("You Are Not Authorize")
    }
       

    }catch(e){
        res.send(e.message)
    }
})

app.patch("/:id",authenticator,async(req,res)=>{
    let id = req.params.id
    const {quantity} = req.body
  try{
    let Product = await Carts.findById(id)
    let logger_userID = req.body.userID;
    let product_userID = Product.userID
    // console.log(logger_userID,product_userID)
    if(logger_userID === product_userID){
        if(Product){
            let updateProduct = await Carts.findByIdAndUpdate(id , {quantity : quantity} , {new : true})
            res.send("Item is updated in cart")
        }
        else{
            res.send("Item is not in cart")
        }
    }
    else{
        res.send("You Are Not Authorize")
    }

  }catch(e){
        res.send(e.message)
    }
})

module.exports = app;