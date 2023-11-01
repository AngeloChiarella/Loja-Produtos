import { Link } from 'react-router-dom';
import { useProdutoDadosGet } from '../../hooks/useProdutoDadosGet';
import { Card } from '../card/card';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Produtos.css';

function Produtos() {

  const { data } = useProdutoDadosGet();
  return (
    <div className='containers'>
      <div>
        <Link className='carrinho' to="/carrinho"><AiOutlineShoppingCart /></Link>
      </div>
      <div className='card-grid'>
        {data?.map(produtoDados =>
          <Card
            id={produtoDados.id}
            nome={produtoDados.nome}
            preco={produtoDados.preco}
            quantidade={produtoDados.quantidade}
            foto={produtoDados.foto}
          />
        )}
      </div>
    </div>
  )
}

export default Produtos
