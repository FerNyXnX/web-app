import { IMAGE_SIZES, API_CONFIG } from './constants';

/**
 * Constructs the full image URL from TMDB
 * @param {string} path - Image path from API
 * @param {string} size - Image size (from IMAGE_SIZES)
 * @returns {string} Full image URL
 */
export const getImageUrl = (path, size = IMAGE_SIZES.POSTER.MEDIUM) => {
  if (!path) return null;
  return `${API_CONFIG.IMAGE_BASE_URL}/${size}${path}`;
};

/**
 * Formats a date string to a readable format
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', options);
};

/**
 * Formats a number to include commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export const formatNumber = (num) => {
  if (!num) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Truncates text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 150) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Calculates the rating percentage
 * @param {number} rating - Rating value (0-10)
 * @returns {number} Percentage value
 */
export const getRatingPercentage = (rating) => {
  if (!rating) return 0;
  return Math.round((rating / 10) * 100);
};

/**
 * Gets rating color based on value
 * @param {number} rating - Rating value (0-10)
 * @returns {string} Color code
 */
export const getRatingColor = (rating) => {
  if (rating >= 7) return '#46d369';
  if (rating >= 5) return '#ffa500';
  return '#ff4444';
};

/**
 * Formats runtime in minutes to hours and minutes
 * @param {number} minutes - Runtime in minutes
 * @returns {string} Formatted runtime
 */
export const formatRuntime = (minutes) => {
  if (!minutes) return 'N/A';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

/**
 * Checks if a movie is in favorites
 * @param {Array} favorites - Array of favorite movies
 * @param {number} movieId - Movie ID to check
 * @returns {boolean} True if movie is in favorites
 */
export const isMovieInFavorites = (favorites, movieId) => {
  return favorites.some(movie => movie.id === movieId);
};

/**
 * Filters out duplicate movies by ID
 * @param {Array} movies - Array of movies
 * @returns {Array} Array without duplicates
 */
export const removeDuplicateMovies = (movies) => {
  const seen = new Set();
  return movies.filter(movie => {
    if (seen.has(movie.id)) {
      return false;
    }
    seen.add(movie.id);
    return true;
  });
};