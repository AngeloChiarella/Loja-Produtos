import { useState } from 'react';
import { useProdutoDadosGet } from '../../hooks/useProdutoDadosGet';
import { Lista } from '../lista/Lista';
import { CriarModal } from '../modal/CreateModal';
import './estoque.css';
import { ProdutoDados } from '../interface/ProdutoDados';

function Estoque() {

  const { data } = useProdutoDadosGet();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produtoEdit, setProdutoEdit] = useState<ProdutoDados | null>();

  const handleOpenModal = (produto?: ProdutoDados) => {
    setProdutoEdit(produto || null);
    setIsModalOpen(prev => !prev);

  }


  return (
    <div className='container'>
      {isModalOpen && (
        <CriarModal key={produtoEdit?.id} closeModal={handleOpenModal} produtoExistente={produtoEdit} />
      )}
      <button className='btn-new' onClick={() => handleOpenModal()} >Novo</button>
      <div className="card-grid">
        {data?.map(produtoDados =>
          <Lista
            id={produtoDados.id}
            nome={produtoDados.nome}
            preco={produtoDados.preco}
            quantidade={produtoDados.quantidade}
            foto={produtoDados.foto}
            onEditClick={() => handleOpenModal(produtoDados)}
          />
        )}
      </div>
    </div>
  )
}

export default Estoque;
