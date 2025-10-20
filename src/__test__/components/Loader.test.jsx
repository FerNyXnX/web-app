import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Loader from '../../components/common/Loader/Loader';
import { theme } from '../../styles/theme';

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Loader Component', () => {
  test('renders loader with default text', () => {
    renderWithTheme(<Loader />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  test('renders loader with custom text', () => {
    renderWithTheme(<Loader text="Loading movies..." />);
    expect(screen.getByText('Loading movies...')).toBeInTheDocument();
  });

  test('renders without text when text prop is empty', () => {
    renderWithTheme(<Loader text="" />);
    expect(screen.queryByText('Cargando...')).not.toBeInTheDocument();
  });

  test('renders with small size', () => {
    renderWithTheme(<Loader size="small" />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  test('renders with large size', () => {
    renderWithTheme(<Loader size="large" />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });

  test('renders with medium size by default', () => {
    renderWithTheme(<Loader />);
    expect(screen.getByText('Cargando...')).toBeInTheDocument();
  });
});