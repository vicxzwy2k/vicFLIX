import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

//importando as rotas do index
import mainRoutes from './routes/index'

dotenv.config()

const server = express()

server.set('view engine', 'mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
server.use(express.static(path.join(__dirname,'../public')))
//usando mainRoutes (do index)
server.use(mainRoutes)

server.use((req,res) =>{
    res.render('pages/404')
})



//acessando servidor
server.listen(process.env.PORT)