import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Movie } from '../../types/Movie';
import { MovieCard } from '../MovieCard/MovieCard';
import './style.css'
import { Link } from'react-router-dom';

interface CarouselProps {
  movies: Movie[];
  title: string;
  linkTo: string;
}

export const Carousel = ({ movies, title, linkTo}: CarouselProps) => {
  return (
    <div className="movie-carrossel">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          734: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
          1440: { slidesPerView: 5 },
        }}
      >
        {movies.slice(0, 10).map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to={linkTo} className="see-more">Ver mais</Link>
    </div>
  );
};