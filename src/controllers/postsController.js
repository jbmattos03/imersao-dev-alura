import { getTodosPosts, criarPost } from "../models/postsModel.js";
import fs from "fs"; // import file system

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    
    res.status(200);
    res.json(posts);
}

export async function postarPost(req, res) {
    // pegar post na requisição
    const novoPost = req.body;

    // tratar exceções
    try {
        const postCriado = await criarPost(novoPost);
        console.log("Post criado com sucesso.");

        res.status(200);
        res.json(postCriado);
    } catch(erro) {
        console.error(erro.message); // mostrar mensagem de erro no console

        // exibir erro para cliente
        res.status(500); // erro interno no servidor
        res.json({"Erro":"Falha na requisição"});
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png` // template string

        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200);
        res.json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500);
        res.json({"Erro":"Falha na requisição"});
    }
}