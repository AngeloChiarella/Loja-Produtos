import { useState } from 'react';
import { useProdutoDados } from '../../hooks/useProdutoDados';
import { CriarModal } from '../modal/criar-modal';
import './estoque.css';
import { Lista } from '../lista/lista';

function Estoque() {

  const { data } = useProdutoDados();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className='container'>
      {isModalOpen && <CriarModal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal} >  {isModalOpen ? "Cancelar" : "Novo"}</button>

      <div className="card-grid">
        {data?.map(produtoDados =>
          <Lista
            nome={produtoDados.nome}
            preco={produtoDados.preco}
            quantidade={produtoDados.quantidade}
            foto={produtoDados.foto} />
        )}

      </div>
    </div>
  )
}

export default Estoque;
