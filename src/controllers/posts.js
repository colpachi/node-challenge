//Faz o gerenciamento dos posts "a rota me encaminha para um controller"

const Post = require('../models/post')

class PostController {
    
    //async await é usado para aguardar algo

    // lista todos os posts
    async index(req, res) {
        const posts = await Post.find()
        return res.json(posts)
    }

    //cria um post
    async create(req, res) {               
        
        try {
            const {body,title,tags} = req.body
            const post = await Post.create({title, body, tags})
            return res.json(post)
        } catch (error) {
            return res.status(400).json({mensagem:error.message})
        }
    }

    //busca um post por id
    //Nativamente o Mongoose já possui um método findById
    async show(req, res) {

        try {
            const id = req.params.id
            const post = await Post.findById(id)
            return res.json(post)
        } catch (error) {
            return res.status(400).json({mensagem:error.message})
        }
    }

    //edita um post de um id
    //Nativamente o Mongoose já possui um método findByIdAndUpdate
    async update(req, res) {
        try {
            const id = req.params.id
            const {body,title,tags} = req.body            
            const post = await Post.findByIdAndUpdate(id, {title, body, tags}, {new:true})
            return res.json(post)
        } catch (error) {
            return res.status(400).json({mensagem:error.message})
        }
    }

    //deleta um post
    //Nativamente o Mongoose já possui um método findByIdAndUpdate
    async delete(req, res) {

        try {
            const id = req.params.id
            await Post.findByIdAndDelete(id)
            return res.json() //padrão de resposta por padrão é 200
        } catch (error) {
            return res.status(400).json({mensagem:error.message})
        }
    }

}

module.exports = new PostController();