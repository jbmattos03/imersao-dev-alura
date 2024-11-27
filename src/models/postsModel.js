import conectarAoBanco from "../config/dbConfig.js";

// conectar ao banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// detalhes da conexao
const db = conexao.db("instabytes-alura");
const colecao = db.collection("posts");

// pegar todos os posts do DB
export async function getTodosPosts() {
    return colecao.find().toArray(); // retornar em um array
}

// criar novo post
export async function criarPost(novoPost) {
    return colecao.insertOne(novoPost); // inserir na db
}