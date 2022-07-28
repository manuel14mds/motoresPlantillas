import express from "express"
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import productsRouter from './routes/products.router.js'

const app = express()

const server = app.listen(8080, ()=>console.log('listening on 8080 port \n'))


app.engine('handlebars', handlebars.engine())// se indica que va a trabajar con un motor/engine y con cual
app.set('views', __dirname+'/views')//se indica la carpeta donde encontrará las vistas
app.set('view engine', 'handlebars')//relaciona/conecta las views con el motor 


app.use(express.json())
app.use(express.static(__dirname+'/public'))
app.use('/', viewsRouter)
app.use('/api/newProduct', productsRouter)

