import express from 'express'
import __dirname from './utils.js'
import productRouter from './routes/products.router.js'
import ProductManager from './managers/product.manager.js'


const app = express()
const productService = new ProductManager

const server=app.listen(8080,()=>console.log('listening on 8080 port \n'))


app.set('views',__dirname+'/views')
app.set('view engine', 'pug')


app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.render('welcome.pug', {
        message:'valor pasado por el render'
    })
})
app.get('/newProduct',(req,res)=>{
    res.render('newProduct', )
})
app.get('/products',async (req,res)=>{
    let products = await productService.getAllProducts()
    res.render('products', {products, listVoid:products.length===0})
})

app.use('/api/newProduct', productRouter)

export default app