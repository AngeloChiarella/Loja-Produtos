import './card.css'

interface CardProps {
    id:number,
    nome: string,
    preco: number,
    quantidade: number
    foto: string
}

const FOTO_URL = './src/img/'
/* eslint-disable react-hooks/rules-of-hooks */
function formatarParaReais(preco:number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco);
  }

export function Card({ nome, preco, quantidade, foto }: CardProps) {
    return (
        <div className="card-p">
            <img src={FOTO_URL + foto}/>
            <h2>{nome}</h2>
            <h3>{quantidade} unidades</h3>
            <p><b>Preço: </b>{formatarParaReais(preco)}<br/> 
            10 x  s/ juros de: {formatarParaReais(preco / 10)}</p>
            <button className='btn'>Adicionar no carrinho</button>
        </div>
    )
}