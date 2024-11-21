import conectarAoBanco from "../config/dbConfig.js";

// conectar ao banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// pegar todos os posts do DB
export default async function getTodosPosts() {
    const db = conexao.db("instabytes-alura");
    const colecao = db.collection("posts");

    return colecao.find().toArray(); // retornar em um array
}