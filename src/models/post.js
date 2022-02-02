//Camada de dados

//schema é a definição do documento no mongoDB
//um documento é um tipo de estrutura de dados do MongoDB

const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String, required: true
    },
    body: {
        type: String, required: true
    },
    tags: [String]
}, { timestamps: true })

module.exports = mongoose.model('post', postSchema)
