import Product from "../models/productsModel.js"
import ansyHandler from "express-async-handler"



// Getting product  by Api

export const getProducts =ansyHandler(async(req, res)=>{
    const products = await Product.find({})
    res.json(products);

})

// Getting product  by Id from Api

export const getProductById =ansyHandler(async(req,res)=>{
    const element = await Product.findById(req.params.id)
    console.log(element)
    if (element) {
      res.json(element);

}
else {
    res.send({
      message: "Data not found"
    })
  }
})

