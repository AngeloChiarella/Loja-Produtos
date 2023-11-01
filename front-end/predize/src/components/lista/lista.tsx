/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useProdutoDados } from '../../hooks/useProdutoDados';
import { ProdutoDados } from '../interface/ProdutoDados';
import './lista.css';
import { CriarModal } from '../modal/CreateModal';

interface ListaProps {
    id?: number,
    nome?: string,
    preco?: number,
    quantidade?: number,
    foto?: string,
    onEditClick: (event: React.MouseEvent<HTMLButtonElement>, produto?: ProdutoDados) => void;

}

export function Lista({ id, nome, preco, quantidade, foto }: ListaProps) {

    const { deleteProduto } = useProdutoDados();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const produtoEdit = { id, nome, preco, quantidade, foto }

    function formatarParaReais(preco: number | 0) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(preco);
    }

    const deletar = () => {
        const produtoDados: ProdutoDados = {
            id: id,
            nome: '',
            foto: '',
            preco: 0,
            quantidade: 0
        }
        deleteProduto.mutate(produtoDados)
    }

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

    return (
        <div className="card">
            <img src={foto} />
            <h2 className='container'>{nome}</h2>
            <p><h3>{quantidade} unidades</h3><br />
                <b>Preço: </b>{formatarParaReais(preco || 0) }<br /></p>

            <div>
                {isModalOpen && (
                    <CriarModal key={id} closeModal={handleOpenModal} produtoExistente={produtoEdit} />
                )}

                <button onClick={handleOpenModal} className='btn-edit'>Editar</button>
                <button onClick={deletar} className='btn-excl'>Excluir</button>
            </div>
        </div>
    );
}