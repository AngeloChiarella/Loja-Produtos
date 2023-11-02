/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { useProdutoDados } from "../../hooks/useProdutoDados";
import { ProdutoDados } from "../interface/ProdutoDados";
import "./modal.css";

interface ModalProps {
    closeModal(): void;
    produtoExistente?: ProdutoDados | null;
    produtoDados?: ProdutoDados;
}

export function CriarModal({ closeModal, produtoExistente }: ModalProps) {
    const [id, setId] = useState(produtoExistente?.id);
    const [nome, setNome] = useState(produtoExistente?.nome);
    const [preco, setPreco] = useState(produtoExistente?.preco);
    const [quantidade, setQuantidade] = useState(produtoExistente?.quantidade);
    const [foto, setFoto] = useState(produtoExistente?.foto);
    const { post, put } = useProdutoDados();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFoto(e.target.files[0].name);
        }
    }
      
    useEffect(() => {
        if (produtoExistente) {
            setId(produtoExistente.id)
            setNome(produtoExistente.nome);
            setPreco(produtoExistente.preco);
            setQuantidade(produtoExistente.quantidade);
            setFoto(produtoExistente.foto);
        }
    }, [produtoExistente]);

    const submit = () => {
        const produtoDados: ProdutoDados = {
            id,
            nome,
            preco,
            quantidade,
            foto,
        }

        if (produtoExistente) {
            produtoDados.id = produtoExistente.id;
            put.mutate(produtoDados);
        } else {
            post.mutate(produtoDados);
        }

        closeModal();
    }


    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Produto</h2>
                <button onClick={closeModal} className="button-cancelar">x</button>
                <form className="input-container">
                    <label>Nome</label><br />
                    <input value={nome} onChange={(e) => setNome(e.target.value)} /><br />

                    <label>Preço</label><br />
                    <input value={preco} onChange={(e) => setPreco(Number(e.target.value))} /><br />

                    <label>Quantidade</label><br />
                    <input value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} /><br />

                    <label>Foto</label><br />
                    <input type="file" onChange={handleFileChange} />
                    <div className="input-foto">
                        <button onClick={submit} className="button">
                            {id ? "Atualizar" : "Inserir"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}