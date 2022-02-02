//agrupa todas as rotas da aplicação "sistema"

const router = require('express').Router()
const posts = require('./posts')

router.use("/posts", posts) //quando acessar /posts, use a rota de posts.

module.exports = router;