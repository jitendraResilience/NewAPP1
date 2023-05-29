import mongoose from "mongoose";
const MONGODB_URL="mongodb+srv://jitendrachoudhary:proshop1234@cluster0.uvwddfr.mongodb.net/proShop?retryWrites=true&w=majority"

const connectionDB = async()=>{
   
    try{

        const con = await mongoose.connect(MONGODB_URL, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
          
        })
     
  console.log(`mongodb is connected Database Name is : ${con.connection.db.databaseName}`.bgRed.blue);
    }catch(error){

        console.log(error.message)
    }
}

export default connectionDB