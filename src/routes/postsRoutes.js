import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    app.use(express.json());

    // rota posts
    app.get("/posts", listarPosts);

    // exibir um post por vez na rota posts
    //app.get("/posts/:id", exibirPostPorID);
}

export default routes;