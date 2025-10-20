import { createSlice } from '@reduxjs/toolkit';

const FAVORITES_STORAGE_KEY = 'movieExplorerFavorites';

// Load favorites from localStorage
const loadFavoritesFromStorage = () => {
  try {
    const serializedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (serializedFavorites === null) {
      return [];
    }
    return JSON.parse(serializedFavorites);
  } catch (err) {
    console.error('Error loading favorites from localStorage:', err);
    return [];
  }
};

// Save favorites to localStorage
const saveFavoritesToStorage = (favorites) => {
  try {
    const serializedFavorites = JSON.stringify(favorites);
    localStorage.setItem(FAVORITES_STORAGE_KEY, serializedFavorites);
  } catch (err) {
    console.error('Error saving favorites to localStorage:', err);
  }
};

const initialState = {
  favorites: loadFavoritesFromStorage(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      const exists = state.favorites.find(fav => fav.id === movie.id);
      
      if (!exists) {
        state.favorites.push(movie);
        saveFavoritesToStorage(state.favorites);
      }
    },
    removeFromFavorites: (state, action) => {
      const movieId = action.payload;
      state.favorites = state.favorites.filter(movie => movie.id !== movieId);
      saveFavoritesToStorage(state.favorites);
    },
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const index = state.favorites.findIndex(fav => fav.id === movie.id);
      
      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(movie);
      }
      saveFavoritesToStorage(state.favorites);
    },
    clearAllFavorites: (state) => {
      state.favorites = [];
      saveFavoritesToStorage([]);
    },
  },
});

export const { 
  addToFavorites, 
  removeFromFavorites, 
  toggleFavorite,
  clearAllFavorites 
} = favoritesSlice.actions;

export default favoritesSlice.reducer;