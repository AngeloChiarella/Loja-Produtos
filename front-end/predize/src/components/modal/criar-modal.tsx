import { useEffect, useState } from "react";
import { useProdutoDadosAlterar } from "../../hooks/useProdutoDadosAlterar";
import { ProdutoDados } from "../interface/ProdutoDados";
import './modal.css';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CriarModal({ closeModal }: ModalProps) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [foto, setFoto] = useState("");
    const { mutate } = useProdutoDadosAlterar();

    const submit = () => {
        const produtoDados: ProdutoDados = {
            id: 0,
            nome,
            preco,
            quantidade,
            foto,
        }
        mutate.mutate(produtoDados)
        closeModal()
    }

    useEffect(() => {
        closeModal()
    })

    return (
        <div className="modal-overflow">
            <div className="modal-body">
                <h2>Produto</h2>
                <form className="input-container">
                    <Input label="nome" value={nome} updateValue={setNome} />
                    <Input label="preco" value={preco} updateValue={setPreco} /><br />
                    <Input label="quantidade" value={quantidade} updateValue={setQuantidade} />
                    <Input label="foto" value={foto} updateValue={setFoto} />
                </form>
                <button onClick={submit} className="button">
                    Inserir</button>
            </div>
        </div>
    )
}
