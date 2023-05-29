import mongoose  from "mongoose";
import bcrypt from "bcryptjs"

const UsersSchema =mongoose.Schema({
    name:{
        type : String,
        required:true
    },
    
    email:{
        type : String,
        required:true,
        unique:true
    },
    password:{
        type : String,
        required:true
    },
   
    isAdmin:{
        type :Boolean,
        default:false,
        required:true,
        
    },

},
{
    timestamp:true
}

)

UsersSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

UsersSchema.pre('save', async function(next){

       const salt = await bcrypt.genSalt(10)
     this.password= await bcrypt.hash(this.password,salt)


console.log( this.passwordpassword)
next()
})
const User = mongoose.model("User", UsersSchema)

export default User;