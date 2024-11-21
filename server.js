import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
routes(app);

// inicializar servidor
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000. \nAperte Ctrl + C para encerrar.");
});