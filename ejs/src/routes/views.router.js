import { Router } from "express";
import ProductManager from '../manager/products.manager.js'

const router = Router()
const productService =  new ProductManager()

router.get('/', (req,res)=>{
    res.render('home', {title:'ejs'})
})
router.get('/newProduct', (req,res)=>{
    res.render('newProduct')
})
router.get('/products', async(req,res)=>{
    let products = await productService.getAllProducts()
    res.render('products', {products:products, voidList:products.length===0})
})

export default router