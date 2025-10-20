import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from 'redux-mock-store';
import SearchBar from '../../components/SearchBar/SearchBar';
import { theme } from '../../styles/theme';

// Mock axios
jest.mock('axios');

const mockStore = configureStore([]);

describe('SearchBar Component', () => {
  test('renders search input', () => {
    const store = mockStore({
      movies: { searchResults: [], searchQuery: '' },
    });

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SearchBar />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByPlaceholderText('Buscar películas...')).toBeInTheDocument();
  });

  test('updates input value', () => {
    const store = mockStore({
      movies: { searchResults: [], searchQuery: '' },
    });

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SearchBar />
        </ThemeProvider>
      </Provider>
    );

    const input = screen.getByPlaceholderText('Buscar películas...');
    fireEvent.change(input, { target: { value: 'Avatar' } });
    expect(input.value).toBe('Avatar');
  });

  test('shows clear button', () => {
    const store = mockStore({
      movies: { searchResults: [], searchQuery: '' },
    });

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SearchBar />
        </ThemeProvider>
      </Provider>
    );

    const input = screen.getByPlaceholderText('Buscar películas...');
    fireEvent.change(input, { target: { value: 'Avatar' } });
    
    expect(screen.getByLabelText('Limpiar búsqueda')).toBeInTheDocument();
  });

  test('clears input', () => {
    const store = mockStore({
      movies: { searchResults: [], searchQuery: '' },
    });

    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SearchBar />
        </ThemeProvider>
      </Provider>
    );

    const input = screen.getByPlaceholderText('Buscar películas...');
    fireEvent.change(input, { target: { value: 'Avatar' } });
    
    const clearButton = screen.getByLabelText('Limpiar búsqueda');
    fireEvent.click(clearButton);
    
    expect(input.value).toBe('');
  });
});