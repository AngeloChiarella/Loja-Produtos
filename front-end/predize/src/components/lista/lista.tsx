import './lista.css';

interface ListaProps {
    nome: string,
    preco: number,
    quantidade: number
    foto: string
}

const FOTO_URL = './src/img/'
// eslint-disable-next-line react-hooks/rules-of-hooks
/* const mutate = useProdutoDadosAlterar();

function deletar(id: number)  {
    const produtoDados: ProdutoDados = {
        id: id,
        nome: '',
        foto: '',
        preco: 0,
        quantidade: 0
    }
    mutate.deleteProduct(produtoDados)
} */

function formatarParaReais(preco: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco);
}

export function Lista({ nome, preco, quantidade, foto }: ListaProps) {
    return (
        <div className="card">
            <img src={FOTO_URL + foto} />
            <h2>{nome}</h2>
            <h3>{quantidade} unidades</h3>
            <p><b>Preço: </b>{formatarParaReais(preco)}<br />
                10 x  s/ juros de: {formatarParaReais(preco / 10)}</p>

            <div>
                <button className='btn-edit'>Editar</button>
                <button className='btn-excl' /* onClick={deletar(id)}  */>Excluir</button>
            </div>
        </div>
    )
}