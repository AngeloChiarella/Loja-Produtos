import React from 'react';
import {Link} from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Navbar.css';


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/estoque">Estoque</Link>
      <Link to="/catalogo">Catálogo</Link>
      <Link to="/carrinho"><AiOutlineShoppingCart/></Link>
{/*             <button typeof='button' className="new-btn">
              
            </button> */}
    </nav>
  );
}

export default Navbar;

