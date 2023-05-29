import express from "express";
import {
  getUsersAuth,
  getUsersProfile,
  registerUser,
} from "../controllers/UserController.js";
import Protect from "./AuthrizationOfProfile.js";

const UserRoute = express.Router();
UserRoute.route('/register').post(registerUser)
UserRoute.post("/login", getUsersAuth);
UserRoute.route("/profile").get(Protect,getUsersProfile);

export default UserRoute;
