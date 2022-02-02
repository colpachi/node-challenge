//configurar o servidor express
require('dotenv').config() //carrega o .env
const express = require('express')
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./docs/swagger.json');

const routes = require('./routes/api') //importando rotas agrupadas que estão em api (se n especificar automaticamente busca index.js)

const app = express()


app.use(express.json())

app.use("/api", routes) // quando acessar /api, busque estas rotas
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = { app }

