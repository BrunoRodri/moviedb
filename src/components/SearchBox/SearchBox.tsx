import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

export const SearchBox = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquisar filmes..."
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};