import { useProdutoDados } from '../../hooks/useProdutoDados';
import { Card } from '../card/card';
import './Produtos.css';

function Produtos() {

  const { data } = useProdutoDados();
  return (
    <div className='containers'>
      <div className='card-grid'>

        {data?.map(produtoDados =>
          <Card
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
