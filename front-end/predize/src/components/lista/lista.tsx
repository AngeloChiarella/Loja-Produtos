import { useProdutoDadosAlterar } from '../../hooks/useProdutoDadosAlterar';
import { ProdutoDados } from '../interface/ProdutoDados';
import './lista.css';

interface ListaProps {
    id?: number,
    nome: string,
    preco: number,
    quantidade: number
    foto: string
}

export function Lista({ id, nome, preco, quantidade, foto }: ListaProps) {

    const { deleteProduct } = useProdutoDadosAlterar();

    function formatarParaReais(preco: number) {
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
        deleteProduct.mutate(produtoDados)
        window.alert('Produto excluído com sucesso!');
    }
    return (
        <div className="card">
            <img src={foto} />
            <h2 className='container'>{nome}</h2>
            <p><h3>{quantidade} unidades</h3><br />
                <b>Preço: </b>{formatarParaReais(preco)}<br /></p>

            <div>
                <button className='btn-edit'>Editar</button>
                <button onClick={deletar} className='btn-excl'>Excluir</button>
            </div>
        </div>
    )
}