import api from './api';

export const movieService = {
  /**
   * Get popular movies
   * @param {number} page - Page number
   * @returns {Promise} API response
   */
  getPopularMovies: async (page = 1) => {
    const response = await api.get('/movie/popular', {
      params: { page },
    });
    return response.data;
  },

  /**
   * Get top rated movies
   * @param {number} page - Page number
   * @returns {Promise} API response
   */
  getTopRatedMovies: async (page = 1) => {
    const response = await api.get('/movie/top_rated', {
      params: { page },
    });
    return response.data;
  },

  /**
   * Get upcoming movies
   * @param {number} page - Page number
   * @returns {Promise} API response
   */
  getUpcomingMovies: async (page = 1) => {
    const response = await api.get('/movie/upcoming', {
      params: { page },
    });
    return response.data;
  },

  /**
   * Get now playing movies
   * @param {number} page - Page number
   * @returns {Promise} API response
   */
  getNowPlayingMovies: async (page = 1) => {
    const response = await api.get('/movie/now_playing', {
      params: { page },
    });
    return response.data;
  },

  /**
   * Search movies by query
   * @param {string} query - Search query
   * @param {number} page - Page number
   * @returns {Promise} API response
   */
  searchMovies: async (query, page = 1) => {
    const response = await api.get('/search/movie', {
      params: { query, page },
    });
    return response.data;
  },

  /**
   * Get movie details by ID
   * @param {number} movieId - Movie ID
   * @returns {Promise} API response
   */
  getMovieDetails: async (movieId) => {
    const response = await api.get(`/movie/${movieId}`, {
      params: {
        append_to_response: 'credits,videos,similar',
      },
    });
    return response.data;
  },

  /**
   * Get movie credits
   * @param {number} movieId - Movie ID
   * @returns {Promise} API response
   */
  getMovieCredits: async (movieId) => {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data;
  },

  /**
   * Get similar movies
   * @param {number} movieId - Movie ID
   * @param {number} page - Page number
   * @returns {Promise} API response
   */
  getSimilarMovies: async (movieId, page = 1) => {
    const response = await api.get(`/movie/${movieId}/similar`, {
      params: { page },
    });
    return response.data;
  },
};