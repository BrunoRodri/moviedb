import { useEffect, useState } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { Carousel } from '../../components/Carousel/Carousel';
import { getPopularMovies, getNowPlayingMovies, getUpcomingMovies } from '../../services/tmdb';
import { Movie } from '../../types/Movie';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const [popular, nowPlaying, upcoming] = await Promise.all([
        getPopularMovies(),
        getNowPlayingMovies(),
        getUpcomingMovies(),
      ]);
      setPopularMovies(popular);
      setNowPlayingMovies(nowPlaying);
      setUpcomingMovies(upcoming);
    };

    fetchMovies();
  }, []);

  return (
    <div className="home">
      <div className="pesquisa">
        <SearchBox />
      </div>
      <div className="container">
      <Carousel 
        movies={popularMovies} 
        title="Filmes Populares"
        linkTo="/popular" 
      />

      <Carousel 
        movies={nowPlayingMovies} 
        title="Em Cartaz"
        linkTo="/now-playing" 
      />

      <Carousel 
        movies={upcomingMovies} 
        title="Em Breve"
        linkTo="/upcoming"  
      />
      </div>
    </div>  
  );
};