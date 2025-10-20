import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../redux/slices/moviesSlice';

/**
 * Custom hook for fetching movies data
 * @returns {Object} Movies state and loading status
 */
const useMovies = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading, error } = 
    useSelector((state) => state.movies);

  useEffect(() => {
    if (popularMovies.length === 0) {
      dispatch(fetchPopularMovies());
    }
    if (topRatedMovies.length === 0) {
      dispatch(fetchTopRatedMovies());
    }
    if (upcomingMovies.length === 0) {
      dispatch(fetchUpcomingMovies());
    }
  }, [dispatch, popularMovies.length, topRatedMovies.length, upcomingMovies.length]);

  return {
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    loading,
    error,
  };
};

export default useMovies;