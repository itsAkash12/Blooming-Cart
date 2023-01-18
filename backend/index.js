require("dotenv").config()

const express = require("express")
const connect = require("./config/db")
const app = express()
const userRoutes = require("./routes/users.route")
const port = process.env.port
const bcrypt = require('bcrypt');
app.use(express.json())
app.use("/users",userRoutes)

app.listen(port , async()=>{
    try{
      await connect()
      console.log(`http://localhost:${port}`)
    }catch(e){
        console.log(e.message)
    }
})