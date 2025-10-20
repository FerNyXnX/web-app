import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import MovieCard from '../../components/MovieCard/MovieCard';
import { theme } from '../../styles/theme';

const mockStore = configureStore([]);

const mockMovie = {
  id: 1,
  title: 'Test Movie',
  poster_path: '/test.jpg',
  release_date: '2024-01-01',
  vote_average: 8.5,
};

describe('MovieCard Component', () => {
  test('renders movie title', () => {
    const store = mockStore({
      favorites: { favorites: [] },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <MovieCard movie={mockMovie} />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
  });

  test('renders release year', () => {
    const store = mockStore({
      favorites: { favorites: [] },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <MovieCard movie={mockMovie} />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  test('displays rating', () => {
    const store = mockStore({
      favorites: { favorites: [] },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <MovieCard movie={mockMovie} />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('85%')).toBeInTheDocument();
  });
});