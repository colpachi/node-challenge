//configurar o servidor express

const express = require('express')

const routes = require('./routes/api') //importando rotas agrupadas que estão em api (se n especificar automaticamente busca index.js)

const app = express()

app.use(express.json())

app.use("/api", routes) // quando acessar /api, busque estas rotas

module.exports = {app}

