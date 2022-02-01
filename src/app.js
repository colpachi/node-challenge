//configurar o servidor express

const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/api') //importando rotas agrupadas que estão em api (se n especificar automaticamente busca index.js)

mongoose.connect("mongodb+srv://admin:admin@cluster0.lo09j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const app = express()

app.use(express.json())

app.use("/api", routes) // quando acessar /api, busque estas rotas

app.listen(3000, () => {
    console.log(`Express server is running on http://localhost:3000`)
})

