/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './card.css';
import Carrinho from '../carrinho/carrinho';
import { ProdutoDados } from '../interface/ProdutoDados';

interface CardProps {
    id?: number;
    nome?: string;
    preco?: number;
    quantidade?: number;
    foto?: string;
}

function formatarParaReais(preco: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco);
}

const API_URL = 'http://localhost:8080'

export function Card({ id, nome, preco, quantidade, foto }: CardProps) {
    const [produtos, setProdutos] = useState<ProdutoDados[]>([]);
    const [carrinho, setCarrinho] = useState<ProdutoDados[] | undefined>(produtos);

    const adicionarProduto = (novoProduto: ProdutoDados) => {
        setCarrinho((prevCarrinho) => prevCarrinho ? [...prevCarrinho, novoProduto] : [novoProduto]);
        <Carrinho produtos={carrinho} />
    };

/*     const removerProduto = (produtoId: number) => {
        setCarrinho((prevCarrinho) => prevCarrinho.filter((produto) => produto.id !== produtoId));
    }; */

    const handleClick = (foto: string) => {
        try {
            const produto: any = axios.get(`${API_URL}/produto/buscarFoto/${foto}`)
            setProdutos([...produtos, produto])
            adicionarProduto(produto)
            console.log(produto.some)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="card-p">
            <img src={"./src/img/" + foto} />
            <h2>{nome}</h2>
            <h3>{quantidade} Un.</h3>
            <p>
                <b>À vista: </b>{formatarParaReais(preco ? preco : 0)}<br />
                10 x  s/ juros de: {formatarParaReais(preco ? preco / 10 : 0)}
            </p>
            <button key={id}
                onClick={() => handleClick(foto ? foto : "")}
                className='btn'>
                <AiOutlineShoppingCart />
            </button>
        </div>
    )
}
