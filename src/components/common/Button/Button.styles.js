import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryDark};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.md};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.secondaryLight};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 2px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.backgroundLight};
    }
  `,
};

const sizes = {
  small: css`
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: 0.875rem;
  `,
  medium: css`
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    font-size: 1rem;
  `,
  large: css`
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    font-size: 1.125rem;
  `,
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  white-space: nowrap;
  width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};

  ${({ variant }) => variants[variant] || variants.primary}
  ${({ size }) => sizes[size] || sizes.medium}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 0.875rem;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;