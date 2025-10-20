import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import Navbar from '../../components/layout/Navbar/Navbar';
import { theme } from '../../styles/theme';

const mockStore = configureStore([]);

const renderWithProviders = (component, initialState = {}) => {
  const store = mockStore({
    favorites: {
      favorites: [],
    },
    ...initialState,
  });

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {component}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

describe('Navbar Component', () => {
  test('renders logo correctly', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('🎬 MovieExplorer')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Favoritos')).toBeInTheDocument();
  });

  test('displays favorites count badge when there are favorites', () => {
    const initialState = {
      favorites: {
        favorites: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    };
    renderWithProviders(<Navbar />, initialState);
    expect(screen.getByText('3')).toBeInTheDocument();
  });

  test('does not display badge when there are no favorites', () => {
    renderWithProviders(<Navbar />);
    const favoritesLink = screen.getByText('Favoritos');
    expect(favoritesLink.parentElement.querySelector('span')).toBeNull();
  });

  test('renders menu button', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument();
  });

  test('logo links to home page', () => {
    renderWithProviders(<Navbar />);
    const logo = screen.getByText('🎬 MovieExplorer');
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });

  test('inicio link points to home', () => {
    renderWithProviders(<Navbar />);
    const inicioLink = screen.getByText('Inicio');
    expect(inicioLink.closest('a')).toHaveAttribute('href', '/');
  });

  test('favoritos link points to favorites page', () => {
    renderWithProviders(<Navbar />);
    const favoritosLink = screen.getByText('Favoritos');
    expect(favoritosLink.closest('a')).toHaveAttribute('href', '/favorites');
  });
});