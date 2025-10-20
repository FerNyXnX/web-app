import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/common/Button/Button';
import { theme } from '../../styles/theme';

const renderWithTheme = (component) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('Button Component', () => {
  test('renders button with children', () => {
    renderWithTheme(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    renderWithTheme(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with primary variant by default', () => {
    renderWithTheme(<Button>Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toBeInTheDocument();
  });

  test('renders with secondary variant', () => {
    renderWithTheme(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });

  test('renders with outline variant', () => {
    renderWithTheme(<Button variant="outline">Outline</Button>);
    expect(screen.getByText('Outline')).toBeInTheDocument();
  });

  test('renders with ghost variant', () => {
    renderWithTheme(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByText('Ghost')).toBeInTheDocument();
  });

  test('renders with small size', () => {
    renderWithTheme(<Button size="small">Small</Button>);
    expect(screen.getByText('Small')).toBeInTheDocument();
  });

  test('renders with large size', () => {
    renderWithTheme(<Button size="large">Large</Button>);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  test('renders full width button', () => {
    renderWithTheme(<Button fullWidth>Full Width</Button>);
    expect(screen.getByText('Full Width')).toBeInTheDocument();
  });

  test('disables button when disabled prop is true', () => {
    renderWithTheme(<Button disabled>Disabled</Button>);
    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    renderWithTheme(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );
    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders with correct type attribute', () => {
    renderWithTheme(<Button type="submit">Submit</Button>);
    const button = screen.getByText('Submit');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('defaults to button type', () => {
    renderWithTheme(<Button>Default</Button>);
    const button = screen.getByText('Default');
    expect(button).toHaveAttribute('type', 'button');
  });
});