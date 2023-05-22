import PedidoController from "./Controllers/PedidoController"

const pedidoController = new PedidoController();

const carrinhoId = "CARR123";
const produtoId = "PROD123";

const resultadoAdicionarProduto = pedidoController.adicionarProdutoAoCarrinho(carrinhoId, produtoId);
console.log(resultadoAdicionarProduto);

const resultadoFinalizarPedido = pedidoController.finalizarPedido(carrinhoId);
console.log(resultadoFinalizarPedido);