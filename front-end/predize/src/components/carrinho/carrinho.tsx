import { useCarrinhoDados } from '../../hooks/useCarrinho';
import { Card } from '../card/card';
import { ProdutoDados } from '../interface/ProdutoDados';


interface Carrinho {
  produtos: ProdutoDados[];
}


export function Carrinho({ produtos }: { produtos: ProdutoDados[] }) {
  const { post } = useCarrinhoDados();
  console.log(post.data)
  /*   const adicionarProduto = (novoProduto: ProdutoDados) => {
      setCarrinho((prevCarrinho) => prevCarrinho ? [...prevCarrinho, novoProduto] : [novoProduto]);
    };
  
    const removerProduto = (produtoId: number) => {
      setCarrinho((prevCarrinho) => prevCarrinho.filter((produto) => produto.id !== produtoId));
    }; */

  function enviarCarrinhoParaBanco() {
    post.mutate({
      ProdutoDados: []
    });
  }

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <button onClick={() => enviarCarrinhoParaBanco}>
        Finalizar a compra
      </button>
      <div className='card-grid'>
        {produtos?.map(produtoDados => (
          <Card
            key={produtoDados.id}
            id={produtoDados.id}
            nome={produtoDados.nome}
            preco={produtoDados.preco}
            quantidade={produtoDados.quantidade}
            foto={produtoDados.foto}
          />))}
      </div>
    </div>
  );
}

export default Carrinho;
