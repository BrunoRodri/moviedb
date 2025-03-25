import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { MovieList } from './pages/movielist/MovieList';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> {/* Adicionado aqui */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<MovieList category="popular" />} />
        <Route path="/now-playing" element={<MovieList category="now-playing" />} />
        <Route path="/upcoming" element={<MovieList category="upcoming" />} />
        <Route path="/search/:query" element={<MovieList category="search" />} />
      </Routes>
    </Router>
  );
}

export default App;