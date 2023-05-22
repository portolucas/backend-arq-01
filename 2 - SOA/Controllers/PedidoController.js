import ProdutoService from "../Services/ProdutoService";
import CarrinhoService from "../Services/CarrinhoService";
import PedidoService from "../Services/PedidoService";

class PedidoController {
  constructor() {
    this.produtoService = new ProdutoService();
    this.carrinhoService = new CarrinhoService();
    this.pedidoService = new PedidoService();
  }

  adicionarProdutoAoCarrinho(carrinhoId, produtoId) {
    const produto = this.produtoService.getProduto(produtoId);
    if (produto) {
      const adicionado = this.carrinhoService.adicionarProduto(
        carrinhoId,
        produtoId
      );
      if (adicionado) {
        return {
          success: true,
          message: "Produto adicionado ao carrinho com sucesso.",
        };
      }
    }
    return {
      success: false,
      message: "Falha ao adicionar o produto ao carrinho.",
    };
  }

  finalizarPedido(carrinhoId) {
    const pedido = this.pedidoService.criarPedido(carrinhoId);
    if (pedido) {
      return { success: true, message: "Pedido criado com sucesso.", pedido };
    }
    return { success: false, message: "Falha ao criar o pedido." };
  }
}

export default PedidoController;