import express from "express";

const app = express();

app.post("/orders", (req, res) => {
  // Lógica para criar um novo pedido
});

app.get("/orders/:id", (req, res) => {
  // Lógica para obter detalhes de um pedido específico
});

app.put("/orders/:id", (req, res) => {
  // Lógica para atualizar um pedido existente
});

app.delete("/orders/:id", (req, res) => {
  // Lógica para excluir um pedido
});

app.listen(5000, () => {
  console.log("Order service running on port 5000");
});
