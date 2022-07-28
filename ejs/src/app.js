import express from 'express'
import __dirname from './utils.js'
import viewsRouter from './routes/views.router.js'
import productRouter from './routes/product.route.js'

const app = express()

const server = app.listen(8080,()=>console.log('listening on 8080 port ....\n'))

app.set('views',__dirname+'/views')
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static(__dirname+'/public'))

app.use('/', viewsRouter)
app.use('/api',productRouter)

