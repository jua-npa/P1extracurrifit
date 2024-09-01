import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <input type="text" placeholder="Búsqueda..." className="search-bar" />
        </div>
      </div>
      <nav className="navbar">
        <ul>
        <a href='/'>
        <img src="src/assets/logo_eafit_completo.png" alt="Universidad EAFIT" className="logo" />
        </a>
          <li><a href='/Calendar'>Calendario</a></li>
          <li><a href="/Groups">Grupos Estudiantiles</a></li>
          <li><a href="/Semis">Semilleros</a></li>
          <li><a href="/Events">Eventos</a></li>
          <li><a href="/Deports">Deportes</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
