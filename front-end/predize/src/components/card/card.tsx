import { AiOutlineShoppingCart } from 'react-icons/ai';
import './card.css'
import { useState } from 'react';

interface CardProps {
    id?: number,
    nome?: string,
    preco?: number,
    quantidade?: number,
    foto?: string
}

function formatarParaReais(preco: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco);
}

export function Card({ id, nome, preco, quantidade, foto }: CardProps) {
    const [remove, setRemove] = useState(quantidade ? quantidade : 0);
    const [adiciona, setAdiciona] = useState(0);

    function atualizaCarrinho() {
        if(remove < 1 ){
            window.alert("Estoque insuficiente!")
            return;
        }
        setRemove(remove - 1);
        setAdiciona(adiciona + 1);
    }

    return (
        <div className="card-p">
            <img src={foto} />
            <h2>{nome}</h2>
            <h3>{remove} unidades</h3>
            <p><b>Preço: </b>{formatarParaReais(preco ? preco : 0)}<br />
                10 x  s/ juros de: {formatarParaReais(preco ? preco / 10 : 0)}</p>
            <button key={id} onClick={atualizaCarrinho} className='btn'><AiOutlineShoppingCart />{adiciona}</button>
        </div>
    )
}