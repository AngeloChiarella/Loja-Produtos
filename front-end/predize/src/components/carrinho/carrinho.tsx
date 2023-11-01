import axios from 'axios';
import { useCarrinhoDados } from '../../hooks/useCarrinho';
import { ProdutoDados } from '../interface/ProdutoDados';

interface CarrinhoProps {
  produtos: ProdutoDados[];
}

function Carrinho(produto : ProdutoDados) {

  function verificar() {
    produto.foto = "macbookpro16";
    const { verify } = useCarrinhoDados();
    verify.mutate(produto);
    console.log(verify);
    axios.get(API_URL + `/produto/buscarFoto/${data.foto}`)

  }

  return (
    <div>
      <button onClick={verificar}>Verificar</button>
      <h2>Carrinho de Compras</h2>
      <p className='produto img'>Foto: </p>
      <p className='produto'>nome: nome</p>
      <p className='info-produto'>Preço: R$ preco</p>
      <p>Quantidade: quantidade</p>
    </div>
  );
};

export default Carrinho;
