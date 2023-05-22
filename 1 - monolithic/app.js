// app.js

// Importar os módulos necessários
const express = require("express");
const bodyParser = require("body-parser");
const database = require("./database");

// Criar a instância do aplicativo Express
const app = express();

// Configurar o middleware para análise de corpo da solicitação
app.use(bodyParser.json());

// Definir uma rota para a página inicial
app.get("/", (req, res) => {
  res.send("Bem-vindo à minha aplicação monolítica!");
});

// Definir uma rota para obter todos os usuários
app.get("/users", (req, res) => {
  const users = database.getUsers();
  res.json(users);
});

// Definir uma rota para criar um novo usuário
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  const user = database.createUser(name, email);
  res.json(user);
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
