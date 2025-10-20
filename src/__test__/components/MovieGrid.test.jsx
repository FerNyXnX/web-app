import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import { theme } from '../../styles/theme';

const mockStore = configureStore([]);

const mockMovies = [
  {
    id: 1,
    title: 'Movie 1',
    poster_path: '/poster1.jpg',
    release_date: '2024-01-01',
    vote_average: 8.5,
  },
  {
    id: 2,
    title: 'Movie 2',
    poster_path: '/poster2.jpg',
    release_date: '2024-02-01',
    vote_average: 7.5,
  },
];

const renderWithProviders = (component) => {
  const store = mockStore({
    favorites: { favorites: [] },
  });

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>{component}</ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

describe('MovieGrid Component', () => {
  test('renders movie grid with movies', () => {
    renderWithProviders(<MovieGrid movies={mockMovies} title="Test Movies" />);
    expect(screen.getByText('Test Movies')).toBeInTheDocument();
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });

  test('renders empty state when no movies', () => {
    renderWithProviders(<MovieGrid movies={[]} title="Empty Grid" />);
    expect(screen.getByText('Empty Grid')).toBeInTheDocument();
    expect(screen.getByText('No se encontraron películas')).toBeInTheDocument();
  });

  test('renders custom empty message', () => {
    renderWithProviders(
      <MovieGrid movies={[]} emptyMessage="Custom empty message" />
    );
    expect(screen.getByText('Custom empty message')).toBeInTheDocument();
  });

  test('renders without title', () => {
    renderWithProviders(<MovieGrid movies={mockMovies} />);
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    // No debe haber un título h2, solo los h3 de las películas
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
  });

  test('handles null movies prop', () => {
    renderWithProviders(<MovieGrid movies={null} />);
    expect(screen.getByText('No se encontraron películas')).toBeInTheDocument();
  });

  test('renders all movies in grid', () => {
    renderWithProviders(<MovieGrid movies={mockMovies} />);
    const movieCards = screen.getAllByText(/Movie \d/);
    expect(movieCards).toHaveLength(2);
  });
});