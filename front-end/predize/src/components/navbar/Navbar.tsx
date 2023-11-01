import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';


const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/estoque">Estoque</Link>
      <Link to="/catalogo">Catálogo</Link>
    </nav>
  );
}

export default Navbar;

