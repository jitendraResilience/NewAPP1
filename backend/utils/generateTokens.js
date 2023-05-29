import jwt from "jsonwebtoken"
import secreat_key from "./screatekey.js"

const generatedToken=(id)=>{
    return jwt.sign({id}, secreat_key,{expiresIn:'30d'})
}


export default generatedToken