export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_TMDB_BASE_URL || 'https://api.themoviedb.org/3',
  API_KEY: process.env.REACT_APP_TMDB_API_KEY || '207f061a9851c0ca435401538d51794d',
  IMAGE_BASE_URL: process.env.REACT_APP_TMDB_IMAGE_BASE_URL || 'https://image.tmdb.org/t/p',
};

export const IMAGE_SIZES = {
  POSTER: {
    SMALL: 'w185',
    MEDIUM: 'w342',
    LARGE: 'w500',
    ORIGINAL: 'original',
  },
  BACKDROP: {
    SMALL: 'w300',
    MEDIUM: 'w780',
    LARGE: 'w1280',
    ORIGINAL: 'original',
  },
  PROFILE: {
    SMALL: 'w45',
    MEDIUM: 'w185',
    LARGE: 'h632',
    ORIGINAL: 'original',
  },
};

export const ROUTES = {
  HOME: '/',
  FAVORITES: '/favorites',
  MOVIE_DETAILS: '/movie/:id',
};

export const MOVIE_CATEGORIES = {
  POPULAR: 'popular',
  TOP_RATED: 'top_rated',
  UPCOMING: 'upcoming',
  NOW_PLAYING: 'now_playing',
};

export const DEBOUNCE_DELAY = 500;

export const PAGINATION = {
  INITIAL_PAGE: 1,
  ITEMS_PER_PAGE: 20,
};