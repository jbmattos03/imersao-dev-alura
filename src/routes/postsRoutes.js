import express from "express";
import multer from "multer";
import { postarPost, listarPosts, uploadImagem } from "../controllers/postsController.js";

// configurar o armazenamento do Multer para uploads de imagens
// passo opcional e necessário para o funcionamento do código no Windows
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // especificar o diretório para armazenar as imagens enviadas
      cb(null, 'uploads/'); // substituir por seu caminho de upload desejado
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // manter o nome original do arquivo por simplicidade
    }
  });

const upload = multer({storage:storage});
// para MAC e Linux:
// const upload = multer({dest:"./uploads", storage});

const routes = (app) => {
    // permitir que servidor interprete requisições no corpo json
    app.use(express.json());

    app.get("/posts", listarPosts); // pegar posts
    app.post("/posts", postarPost); // criar post
    app.post("/upload", upload.single("imagem"), uploadImagem); // fazer upload de imagem 
}

export default routes;