import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { getPopularMovies, getNowPlayingMovies, getUpcomingMovies, searchMovies } from '../../services/tmdb';
import { Movie } from '../../types/Movie';
import './style.css';

interface MovieListProps {
  category: string;
}

const movieFetchers = {
  popular: getPopularMovies,
  'now-playing': getNowPlayingMovies,
  upcoming: getUpcomingMovies,
  search: searchMovies,
};

// Mapeamento de categorias para títulos amigáveis
const categoryTitles = {
  'popular': 'Filmes Populares',
  'now-playing': 'Em Cartaz', 
  'upcoming': 'Em Breve',
  'search': 'Resultados para'
};

export const MovieList = ({ category }: MovieListProps) => {
  const { query } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetcher = movieFetchers[category as keyof typeof movieFetchers];

      if (fetcher) {
        try {
          let data: Movie[];
          if (category === 'search') {
            data = await fetcher(query || '');
          } else {
            data = await (fetcher as () => Promise<Movie[]>)();
          }
          setMovies(data);
        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        }
      }
    };

    fetchMovies();
  }, [category, query]);

  // Obtém o título baseado na categoria
  const getPageTitle = () => {
    if (category === 'search') {
      return `${categoryTitles[category]}: ${query}`;
    }
    return categoryTitles[category as keyof typeof categoryTitles] || category;
  };

  return (
    <div className="movie-list-page">
      <h2>{getPageTitle()}</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};