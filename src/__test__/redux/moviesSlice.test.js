import moviesReducer, {
  setSearchQuery,
  clearSearchResults,
  clearCurrentMovie,
  clearError,
} from '../../redux/slices/moviesSlice';

describe('moviesSlice', () => {
  const initialState = {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    searchResults: [],
    currentMovie: null,
    loading: false,
    error: null,
    searchQuery: '',
    currentPage: 1,
    totalPages: 0,
  };

  test('should return initial state', () => {
    expect(moviesReducer(undefined, { type: 'unknown' })).toEqual(
      initialState
    );
  });

  test('should handle setSearchQuery', () => {
    const actual = moviesReducer(initialState, setSearchQuery('Avatar'));
    expect(actual.searchQuery).toBe('Avatar');
  });

  test('should handle clearSearchResults', () => {
    const stateWithSearch = {
      ...initialState,
      searchResults: [{ id: 1, title: 'Movie' }],
      searchQuery: 'test',
    };
    const actual = moviesReducer(stateWithSearch, clearSearchResults());
    expect(actual.searchResults).toEqual([]);
    expect(actual.searchQuery).toBe('');
  });

  test('should handle clearCurrentMovie', () => {
    const stateWithMovie = {
      ...initialState,
      currentMovie: { id: 1, title: 'Movie' },
    };
    const actual = moviesReducer(stateWithMovie, clearCurrentMovie());
    expect(actual.currentMovie).toBeNull();
  });

  test('should handle clearError', () => {
    const stateWithError = {
      ...initialState,
      error: 'Some error',
    };
    const actual = moviesReducer(stateWithError, clearError());
    expect(actual.error).toBeNull();
  });
});