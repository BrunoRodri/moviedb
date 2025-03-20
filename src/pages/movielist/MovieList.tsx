import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { getPopularMovies, getNowPlayingMovies, getUpcomingMovies, searchMovies } from '../../services/tmdb';
import { Movie } from '../../types/Movie';
import './style.css'

interface MovieListProps {
  category: string;
}

const movieFetchers = {
  popular: getPopularMovies,
  'now-playing': getNowPlayingMovies,
  upcoming: getUpcomingMovies,
  search: searchMovies,
};

export const MovieList = ({ category }: MovieListProps) => {
  const { query } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      // Verifica se a categoria existe no mapeamento
      const fetcher = movieFetchers[category as keyof typeof movieFetchers];

      if (fetcher) {
        try {
          let data: Movie[];
          if (category === 'search') {
            // Se for uma busca, passa o query como argumento
            data = await fetcher(query || '');
          } else {
            // Para outras categorias, chama a função sem argumentos
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

  return (
    <div className="movie-list-page">
      <h2>{category === 'search' ? `Resultados para: ${query}` : category}</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};