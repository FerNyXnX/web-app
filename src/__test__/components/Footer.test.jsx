import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Footer from '../../components/layout/Footer/Footer';
import { theme } from '../../styles/theme';

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Footer Component', () => {
  test('renders footer with copyright text', () => {
    renderWithTheme(<Footer />);
    expect(
      screen.getByText(/MovieExplorer. Todos los derechos reservados/)
    ).toBeInTheDocument();
  });

  test('displays current year in copyright', () => {
    const currentYear = new Date().getFullYear();
    renderWithTheme(<Footer />);
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  test('renders TMDB link', () => {
    renderWithTheme(<Footer />);
    const tmdbLink = screen.getByText('Powered by TMDB');
    expect(tmdbLink).toBeInTheDocument();
    expect(tmdbLink.closest('a')).toHaveAttribute(
      'href',
      'https://www.themoviedb.org/'
    );
  });

  test('renders GitHub link', () => {
    renderWithTheme(<Footer />);
    const githubLink = screen.getByText('GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest('a')).toHaveAttribute(
      'href',
      'https://github.com'
    );
  });

  test('external links open in new tab', () => {
    renderWithTheme(<Footer />);
    const links = screen.getAllByRole('link');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});