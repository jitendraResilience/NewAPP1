import Jwt from "jsonwebtoken";
import secreat_key from "../utils/screatekey.js";
import User from "../models/usersModel.js";

const Protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization) {
    try {
      token = req.headers.authorization;
      const decoded = Jwt.verify(token, secreat_key);
      req.user = await User.findById(decoded.id);
    
   

    
    } catch (Error) {
      console.log("unanle to decode");
    }
  } else {
    console.log("No authorize ! No token found");
  }
next()
};

export default Protect;
