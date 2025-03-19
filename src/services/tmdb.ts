import axios from 'axios';
import { Movie } from '../types/Movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
      page: 1,
    },
  });
  return response.data.results;
};

export const getNowPlayingMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
      page: 1,
    },
  });
  return response.data.results;
};

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
      page: 1,
    },
  });
  return response.data.results;
};

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'pt-BR',
      query: query,
      page: 1,
    },
  });
  return response.data.results;
};