import { AiOutlineShoppingCart } from 'react-icons/ai';
import './card.css'

interface CardProps {
    id?:number,
    nome: string,
    preco: number,
    quantidade: number
    foto: string
}
function formatarParaReais(preco:number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco);
  }

export function Card({id, nome, preco, quantidade, foto }: CardProps) {
    return (
        <div className="card-p">
            <img src={foto}/>
            <h2>{nome}</h2>
            <h3>{quantidade} unidades</h3>
            <p><b>Preço: </b>{formatarParaReais(preco)}<br/> 
            10 x  s/ juros de: {formatarParaReais(preco / 10)}</p>
            <button value={id} className='btn'><AiOutlineShoppingCart /></button>
        </div>
    )
}