import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { getPopularMovies, getNowPlayingMovies, getUpcomingMovies, searchMovies } from '../../services/tmdb';
import { Movie } from '../../types/Movie';
import './style.css'

interface MovieListProps {
  category: string;
}

export const MovieList = ({ category }: MovieListProps) => {
  const { query } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      let data: Movie[] = [];
      if (category === 'popular') {
        data = await getPopularMovies();
      } else if (category === 'now-playing') {
        data = await getNowPlayingMovies();
      } else if (category === 'upcoming') {
        data = await getUpcomingMovies();
      } else if (category === 'search' && query) {
        data = await searchMovies(query);
      }
      setMovies(data);
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