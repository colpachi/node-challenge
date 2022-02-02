//são as rotas de posts propriamente ditas

const express = require('express');
const router = express.Router(); //no express, o router é para criar as rotas
const postController = require('../../controllers/posts') //importando o controller de posts nas rotas

//rotas estão definidas aqui mas sendo processadas no controller
router.get("/", postController.index)

router.post("/", postController.create)

router.get("/:id", postController.show)

router.put("/:id", postController.update)

router.delete("/:id", postController.delete)

module.exports = router;
