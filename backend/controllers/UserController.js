import User from "../models/usersModel.js";
import ansyHandler from "express-async-handler";
import generatedToken from "../utils/generateTokens.js";


// Getting users auth  by Api

export const getUsersAuth = ansyHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generatedToken(user._id),
    });
  } else {
    res.status(401);
    throw  new Error("invailid email & password")
  }
});



export const registerUser = ansyHandler(async (req, res) => {
  const { name,email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
   
    res.status(401);
    throw new Error("user is already exist");
  } 
  else {
   
    const regUser=await User.create({
      name,
      email,
      password
    })
    if(regUser){
  
      res.json({
        name,
        email,
        password
       });
    }
 
  }
});

export const getUsersProfile = ansyHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (user) {
    res.json(user);
    
  } else {
    res.status(401);
  
  }
});
