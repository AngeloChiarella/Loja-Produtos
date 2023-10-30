import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Carrinho from './components/carrinho/carrinho'
import Estoque from './components/estoque/estoque'
import Navbar from './components/navbar/Navbar'
import Produtos from './components/produtos/Produtos'

function App() {
  return (
    <div className='container'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/catalogo" element={<Produtos />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/carrinho" element={<Carrinho produtos={[]} />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
