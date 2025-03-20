import { useEffect, useState } from 'react';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { getPopularMovies, getNowPlayingMovies, getUpcomingMovies } from '../../services/tmdb';
import { Movie } from '../../types/Movie';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './style.css'

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popular = await getPopularMovies();
      const nowPlaying = await getNowPlayingMovies();
      const upcoming = await getUpcomingMovies();
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
        <div className="movie-carrossel">
        <h2>Filmes Populares</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            734: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          {popularMovies.slice(0, 10).map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to="/popular" className="see-more">Ver mais</Link>
      </div>
      <div className="movie-carrossel">
        <h2>Em Cartaz</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            734: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          {nowPlayingMovies.slice(0, 10).map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to="/now-playing" className="see-more">Ver mais</Link>
      </div>
      <div className="movie-carrossel">
        <h2>Em Breve</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            734: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
        >
          {upcomingMovies.slice(0, 10).map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to="/upcoming" className="see-more">Ver mais</Link>
      </div>
      </div>
    </div>
  );
};