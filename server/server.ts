import { join } from 'node:path'
import express from 'express'
import cors, { CorsOptions } from 'cors'
import shoeRouter from './routes/shoes'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))
server.use(cors('*' as CorsOptions))
server.use('/api/v1/shoes', shoeRouter)

server.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'public/index.html'))
})

export default server
