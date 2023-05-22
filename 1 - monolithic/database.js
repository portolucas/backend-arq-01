// database.js

// Dados simulados em memória
let users = [
  { id: 1, name: "João", email: "joao@example.com" },
  { id: 2, name: "Maria", email: "maria@example.com" },
];

// Função para obter todos os usuários
function getUsers() {
  return users;
}

// Função para criar um novo usuário
function createUser(name, email) {
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  return newUser;
}

// Exportar as funções para uso em outros módulos
module.exports = {
  getUsers,
  createUser,
};
