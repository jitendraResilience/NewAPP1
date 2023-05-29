import mongoose from "mongoose";
import color from "colors"
import connectionDB from "./configurationFile/connection.js";
import Products from "./data/Products.js";
import users from "./data/users.js";
import Product from "./models/productsModel.js";
import User from "./models/usersModel.js";
import Order from "./models/orderModel.js";

connectionDB();

const  importData= async ()=>{
    try{
        Order.deleteMany();
        Product.deleteMany();
        User.deleteMany();

        const createduser=await User.insertMany(users)
        const adminUser=createduser[0]._id;
        const sampleproducts = Products.map(product=>{
            return {...product, user:adminUser}
        })

        await Product.insertMany(sampleproducts)
        console.log('Data imported !'.bgGreen)
        process.exit();
    }
    catch(error){

        console.log(`${error.message}`)
        process.exit(1)
    }
}



const  destroyedData= async ()=>{
    try{
        Order.deleteMany();
        Product.deleteMany();
       User.deleteMany();

        console.log('Data destroyed successfully!'.bgRed.bold)
        process.exit();
    }
    catch(error){

        console.log(`${error.message}`)
        process.exit(1)
    }
}

if(process.argv[2]==="-d"){
    destroyedData()
}
else{
    importData();
}