import express from "express";

const app = express();

app.post("/login", (req, res) => {
  // Lógica de autenticação
});

app.post("/logout", (req, res) => {
  // Lógica de logout
});

app.listen(3000, () => {
  console.log("Auth service running on port 3000");
});
