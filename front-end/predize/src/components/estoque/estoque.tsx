import { useState } from 'react';
import { useProdutoDados } from '../../hooks/useProdutoDados';
import { CriarModal } from '../modal/CreateModal';
import './estoque.css';
import { Lista } from '../lista/lista';

function Estoque() {

  const { data } = useProdutoDados();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div>
      <div className='btn-novo-obj'>
        {isModalOpen && <CriarModal closeModal={handleOpenModal} />}
        <button className='btn-new' onClick={handleOpenModal} >  {isModalOpen ? "Cancelar" : "Novo"}</button>
      </div>
      <div className='container'>
        <div className="card-grid">
          {data?.map(produtoDados =>
            <Lista
              id={produtoDados.id}
              nome={produtoDados.nome}
              preco={produtoDados.preco}
              quantidade={produtoDados.quantidade}
              foto={produtoDados.foto} />
          )}

        </div>
      </div>
    </div>
  )
}

export default Estoque;
