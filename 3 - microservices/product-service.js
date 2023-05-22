import express from "express";

const app = express();

app.get("/products", (req, res) => {
  // Lógica para obter lista de produtos
});

app.get("/products/:id", (req, res) => {
  // Lógica para obter detalhes de um produto específico
});

app.post("/products", (req, res) => {
  // Lógica para criar um novo produto
});

app.put("/products/:id", (req, res) => {
  // Lógica para atualizar um produto existente
});

app.delete("/products/:id", (req, res) => {
  // Lógica para excluir um produto
});

app.listen(4000, () => {
  console.log("Product service running on port 4000");
});
