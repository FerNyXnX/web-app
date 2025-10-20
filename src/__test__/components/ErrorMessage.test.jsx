import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';
import { theme } from '../../styles/theme';

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('ErrorMessage Component', () => {
  test('renders with default message', () => {
    renderWithTheme(<ErrorMessage />);
    expect(
      screen.getByText('Ocurrió un error al cargar los datos')
    ).toBeInTheDocument();
  });

  test('renders with custom message', () => {
    renderWithTheme(<ErrorMessage message="Custom error message" />);
    expect(screen.getByText('Custom error message')).toBeInTheDocument();
  });

  test('renders retry button when onRetry is provided', () => {
    const onRetry = jest.fn();
    renderWithTheme(<ErrorMessage onRetry={onRetry} />);
    expect(screen.getByText('Intentar nuevamente')).toBeInTheDocument();
  });

  test('does not render retry button when onRetry is not provided', () => {
    renderWithTheme(<ErrorMessage />);
    expect(
      screen.queryByText('Intentar nuevamente')
    ).not.toBeInTheDocument();
  });

  test('calls onRetry when retry button is clicked', () => {
    const onRetry = jest.fn();
    renderWithTheme(<ErrorMessage onRetry={onRetry} />);
    fireEvent.click(screen.getByText('Intentar nuevamente'));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  test('renders error icon', () => {
    renderWithTheme(<ErrorMessage />);
    expect(screen.getByText('⚠️')).toBeInTheDocument();
  });
});