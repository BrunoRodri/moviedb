import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './style.css';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMobileMenu}>MovieDB</Link>
        </div>

        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/popular" onClick={closeMobileMenu}>Populares</Link></li>
          <li><Link to="/now-playing" onClick={closeMobileMenu}>Em Cartaz</Link></li>
          <li><Link to="/upcoming" onClick={closeMobileMenu}>Em Breve</Link></li>
        </ul>
      </div>
    </nav>
  );
};