import express from "express"
import { getProductById, getProducts } from "../controllers/ProductControler.js";


const Productroute = express.Router();



Productroute.route('/').get(getProducts)

Productroute.route('/:id').get(getProductById)



export default Productroute;