import { movieService } from '../../services/movieService';
import api from '../../services/api';

jest.mock('../../services/api');

describe('movieService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getPopularMovies calls API correctly', async () => {
    const mockData = { results: [], page: 1 };
    api.get.mockResolvedValue({ data: mockData });

    const result = await movieService.getPopularMovies(1);

    expect(api.get).toHaveBeenCalledWith('/movie/popular', {
      params: { page: 1 },
    });
    expect(result).toEqual(mockData);
  });

  test('getTopRatedMovies calls API correctly', async () => {
    const mockData = { results: [], page: 1 };
    api.get.mockResolvedValue({ data: mockData });

    const result = await movieService.getTopRatedMovies(1);

    expect(api.get).toHaveBeenCalledWith('/movie/top_rated', {
      params: { page: 1 },
    });
    expect(result).toEqual(mockData);
  });

  test('searchMovies calls API with query', async () => {
    const mockData = { results: [], page: 1 };
    api.get.mockResolvedValue({ data: mockData });

    const result = await movieService.searchMovies('Avatar', 1);

    expect(api.get).toHaveBeenCalledWith('/search/movie', {
      params: { query: 'Avatar', page: 1 },
    });
    expect(result).toEqual(mockData);
  });

  test('getMovieDetails calls API with correct params', async () => {
    const mockData = { id: 1, title: 'Test Movie' };
    api.get.mockResolvedValue({ data: mockData });

    const result = await movieService.getMovieDetails(1);

    expect(api.get).toHaveBeenCalledWith('/movie/1', {
      params: {
        append_to_response: 'credits,videos,similar',
      },
    });
    expect(result).toEqual(mockData);
  });

  test('handles API errors', async () => {
    const error = new Error('API Error');
    api.get.mockRejectedValue(error);

    await expect(movieService.getPopularMovies()).rejects.toThrow('API Error');
  });
});