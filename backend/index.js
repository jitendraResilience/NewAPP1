import express from "express"
import color from "colors"
const port =process.env.PORT||5000
// import  Products from "./data/Products.js";
import connectionDB from "./configurationFile/connection.js";
import Productroute from "./routes/productsRoutes.js";
import UserRoute from "./routes/userRoutes.js";

const app=express();
 app.use(express.json())
connectionDB();
app.get('/', (req,res)=>{
    console.log('app is running ')
    res.send("app is running ")
})
app.use('/api/product' , Productroute)
app.use('/api/users' , UserRoute)
app.listen(port, console.log("server is running on 5000".rainbow.bold))