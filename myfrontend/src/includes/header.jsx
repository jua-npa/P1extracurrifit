import { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Buscando:", searchTerm);
    window.location.href = `/resultados?search=${searchTerm}`;
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="admin-button">
          <a href='http://localhost:8000/admin/' target="_blank">
            <i className='admon-buttom'>Admin</i>
          </a>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <form onSubmit={handleSearchSubmit}>
            <input 
              type="text" 
              placeholder="Búsqueda..." 
              className="search-bar" 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </div>
      <nav className="navbar">
        <ul>
          <a href='/'>
            <img src="src/assets/logo_eafit_completo.png" alt="Universidad EAFIT" className="logo" />
          </a>
          <li><a href='/Calendario'>Calendario</a></li>
          <li><a href="/Grupos_estudiantiles">Grupos Estudiantiles</a></li>
          <li><a href="/Semilleros">Semilleros</a></li>
          <li><a href="/Eventos">Eventos</a></li>
          <li><a href="/Deportes">Deportes</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
