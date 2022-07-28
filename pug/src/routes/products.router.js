import {Router} from 'express'
import { uploader } from '../utils.js'
import ProductManager from '../managers/product.manager.js'


const router = Router()
const productService = new ProductManager()

router.post('/', uploader.single('img'), async(req,res)=>{
    let {name,price} = req.body
    if(!req.file) return res.status(500).send({status:'error', message:"I could Not upload the image "})
    if(!name||!price) return res.status(400).send({status:'error',error:'Incomplete values'})

    let product = {
        name,
        price,
        img:req.file.filename
    }
    console.log(product)
    await productService.addProducts(product)

    res.send({status:'success', message:'Product added'})
})

export default router

