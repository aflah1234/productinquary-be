const express = require('express')
const productRouter = express.Router()
const {getProducts,getProductsById,createProduct,updateProduct,deleteProduct } = require('../controllers/productController')

productRouter.get('/',getProducts)

productRouter.get('/:id',getProductsById)

productRouter.post('/,',createProduct)

productRouter.patch('/:id',updateProduct)

productRouter.delete('/:id',deleteProduct)
module.exports = productRouter