import { Link } from 'react-router-dom';
import './style.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MovieDB</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/popular">Populares</Link></li>
        <li><Link to="/now-playing">Em Cartaz</Link></li>
        <li><Link to="/upcoming">Em Breve</Link></li>
      </ul>
      
    </nav>
  );
};