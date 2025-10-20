import favoritesReducer, {
  addToFavorites,
  removeFromFavorites,
  toggleFavorite,
  clearAllFavorites,
} from '../../redux/slices/favoritesSlice';

describe('favoritesSlice', () => {
  const initialState = {
    favorites: [],
  };

  const mockMovie = {
    id: 1,
    title: 'Test Movie',
    poster_path: '/test.jpg',
  };

  beforeEach(() => {
    localStorage.clear();
  });

  test('should return initial state', () => {
    expect(favoritesReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  test('should handle addToFavorites', () => {
    const actual = favoritesReducer(initialState, addToFavorites(mockMovie));
    expect(actual.favorites).toHaveLength(1);
    expect(actual.favorites[0]).toEqual(mockMovie);
  });

  test('should not add duplicate movies', () => {
    const stateWithMovie = {
      favorites: [mockMovie],
    };
    const actual = favoritesReducer(
      stateWithMovie,
      addToFavorites(mockMovie)
    );
    expect(actual.favorites).toHaveLength(1);
  });

  test('should handle removeFromFavorites', () => {
    const stateWithMovie = {
      favorites: [mockMovie],
    };
    const actual = favoritesReducer(
      stateWithMovie,
      removeFromFavorites(mockMovie.id)
    );
    expect(actual.favorites).toHaveLength(0);
  });

  test('should handle toggleFavorite - add', () => {
    const actual = favoritesReducer(initialState, toggleFavorite(mockMovie));
    expect(actual.favorites).toHaveLength(1);
    expect(actual.favorites[0]).toEqual(mockMovie);
  });

  test('should handle toggleFavorite - remove', () => {
    const stateWithMovie = {
      favorites: [mockMovie],
    };
    const actual = favoritesReducer(stateWithMovie, toggleFavorite(mockMovie));
    expect(actual.favorites).toHaveLength(0);
  });

  test('should handle clearAllFavorites', () => {
    const stateWithMovies = {
      favorites: [mockMovie, { ...mockMovie, id: 2 }],
    };
    const actual = favoritesReducer(stateWithMovies, clearAllFavorites());
    expect(actual.favorites).toHaveLength(0);
  });

  test('should handle multiple movies', () => {
    let state = initialState;
    state = favoritesReducer(state, addToFavorites(mockMovie));
    state = favoritesReducer(state, addToFavorites({ ...mockMovie, id: 2 }));
    state = favoritesReducer(state, addToFavorites({ ...mockMovie, id: 3 }));
    expect(state.favorites).toHaveLength(3);
  });
});