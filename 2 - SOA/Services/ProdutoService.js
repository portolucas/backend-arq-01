// Service 1 - ProdutoService.js
class ProdutoService {
  getProduto(id) {
    // Lógica para obter os detalhes do produto a partir do ID
    return {
      id: id,
      nome: "Produto X",
      preco: 10.99,
    };
  }
}

export default ProdutoService;