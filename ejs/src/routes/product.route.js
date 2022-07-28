import {Router} from 'express'
import {uploader} from '../utils.js'
import ProductManager from '../manager/products.manager.js'

const router = Router()
const productService =  new ProductManager()

router.post('/newProduct', uploader.single('img'),async (req,res)=>{
    let{name,price} = req.body
    if(!req.file)return res.status(500).send({status:'error', error:"couldn't upload image"})
    if(!name||!price) return res.status(400).send({status:'error', error:"void product values"})
    let product = {
        name,
        price,
        img:req.file.filename
    }
    await productService.addProduct(product)

    res.send({status:'success', message:'product added'})
})

router.get('/productsId',async(req,res)=>{
    console.log('entro al fetch de product')
    console.log(req.params.id)
    let product = await productService.getProductById(req.params.id)
    res.send({product})
})

export default router