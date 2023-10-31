import React, { useState } from "react";
import { useProdutoDadosAlterar } from "../../hooks/useProdutoDadosAlterar";
import { ProdutoDados } from "../interface/ProdutoDados";
import "./modal.css";

interface ModalProps {
    closeModal(): void;
}

export function CriarModal({ closeModal }: ModalProps) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [foto, setFoto] = useState("");
    const { mutate } = useProdutoDadosAlterar();


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFoto("./src/img/" + e.target.files[0].name);
        }
    }

    const submit = () => {
        const produtoDados: ProdutoDados = {
            nome,
            preco,
            quantidade,
            foto,
        }
        mutate.mutate(produtoDados)
        closeModal()
        window.alert('Produto cadastrado com sucesso!');
    }

    return (
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Produto</h2>
                <form className="input-container">
                    <label>Nome</label>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label>Preço</label>
                    <input value={preco} onChange={(e) => setPreco(Number(e.target.value))} />

                    <label>Quantidade</label>
                    <input value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} />

                    <label>Foto</label>
                    <input type="file" onChange={handleFileChange} />

                    <button onClick={submit} className="button">
                        Inserir
                    </button>
                </form>
            </div>
        </div>
    );
}
