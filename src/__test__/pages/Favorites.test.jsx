import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import Favorites from '../../pages/Favorites/Favorites';
import { theme } from '../../styles/theme';

const mockStore = configureStore([]);

const mockMovies = [
  { id: 1, title: 'Favorite 1', poster_path: '/1.jpg', release_date: '2024-01-01', vote_average: 8 },
];

describe('Favorites Page', () => {
  test('renders favorites title', () => {
    const store = mockStore({ favorites: { favorites: mockMovies } });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Favorites />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Mis Favoritos/i)).toBeInTheDocument();
  });

  test('shows empty message when no favorites', () => {
    const store = mockStore({ favorites: { favorites: [] } });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Favorites />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Aún no has agregado películas/i)).toBeInTheDocument();
  });

  test('displays movies', () => {
    const store = mockStore({ favorites: { favorites: mockMovies } });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Favorites />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText('Favorite 1')).toBeInTheDocument();
  });

  test('shows clear button', () => {
    const store = mockStore({ favorites: { favorites: mockMovies } });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Favorites />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
    expect(screen.getByText(/Limpiar Todo/i)).toBeInTheDocument();
  });
});