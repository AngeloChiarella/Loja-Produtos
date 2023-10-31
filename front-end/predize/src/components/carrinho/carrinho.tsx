import React, { useState } from 'react';
import { ProdutoDados } from '../interface/ProdutoDados'; // Certifique-se de importar a interface correta

interface CarrinhoProps {
  produtos: ProdutoDados[];
}

const Carrinho: React.FC<CarrinhoProps> = ({ produtos }) => {
  const [carrinhoProdutos, /* setCarrinhoProdutos */] = useState<ProdutoDados[]>(produtos);

  // Função para remover um produto do carrinho
/*   const removerProdutoDoCarrinho = (id: number) => {
    const novoCarrinho = carrinhoProdutos.filter((produto) => produto.id !== id);
    setCarrinhoProdutos(novoCarrinho);
  }; */

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {carrinhoProdutos.map((produto) => (
          <li key={produto.id}>
            <img src={produto.foto} alt={produto.nome} />
            <p>{produto.nome}</p>
            <p>Preço: R$ {produto.preco}</p>
            <p>Quantidade: {produto.quantidade}</p>
{/*             <button onClick={() => removerProdutoDoCarrinho(produto.id)}>Remover</button>
 */}          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrinho;
