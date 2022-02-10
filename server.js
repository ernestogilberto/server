const express = require('express')
const productsManager = require('./contenedor.js')

manager = new productsManager

const app = express();

app.listen(8080, ()=>{console.log('listening on port 8080')})

app.get('/', (req, res) => {res.send('Pagina Principal')})
app.get('/productos', async (req, res) => {res.send(await manager.getAll().then(r=> (r.payload)))})
app.get('/productoRandom', async (req, res) => {let products = await manager.getAll().then(r=> (r.payload)); let index = Math.floor(Math.random() * products.length + 1); res.send(await manager.getById(index).then(r=> (r)))})