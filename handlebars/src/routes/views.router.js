import {Router} from 'express'
import ProductManager from '../managers/products.js'

const router = Router()
const productService = new ProductManager()
router.get('/', (req,res)=>{
    res.render('welcome')
})

router.get('/newProduct', (req,res)=>{
    res.render('newProduct')
})
router.get('/products', async(req,res)=>{
    let products = await productService.getAllProducts()
    res.render('products',{products, listVoid:products.length===0})
})

export default router