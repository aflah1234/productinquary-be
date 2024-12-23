
const product = require('../models/product')
const ProductData = require('../models/product')
const getProducts =async (req,res)=>{
    try{
       
        const products = await ProductData.find()
            res.status(200).json(products)

    }   catch (error) {
        res.status(500).json({error:error.message})  
      }
}
    const getProductsById =async (req,res)=>{
        try{
            const productID = req.params.id
            const product = await ProductData.findByID(productId)
            if(!product)return res.status(404).json({message:'product not found'})
           
                res.status(200).json(product)
    
        }
    catch (error) {
      res.status(500).json({error:error.message})  
    }

    }

   const createProduct = async(req,res)=>{

    try {
        const {name,price,description,image} =req.body
        const newProduct = new ProductData({name,price,description,image})
        await newProduct.save()
        res.status(201).json(newProduct)

    } catch (error){
        res.status(500).json({error:error.message})  

    }
   }

   const updateProduct =async (req,res)=>{
    try{
        const productID = req.params.id
        const product = await ProductData.findByIdAndUpdate(productId,req.body,{new:true})
        if(!product)return res.status(404).json({message:'product not found'})
       
            res.status(200).json(product)

    }
catch (error) {
  res.status(500).json({error:error.message})  
}

}

const deleteProduct =async (req,res)=>{
    try{
        const productID = req.params.id
        const product = await ProductData.findByIdAndDelete(productId)
        if(!product)return res.status(404).json({message:'product not found'})
       
            res.status(200).json({message:"Product delete successfully"})

    }
catch (error) {
  res.status(500).json({error:error.message})  
}

}
module.exports = {getProducts,getProductsById,createProduct,updateProduct,deleteProduct}