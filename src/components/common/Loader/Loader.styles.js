import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xxl};
  min-height: 300px;
`;

export const Spinner = styled.div`
  width: ${({ size }) => {
    switch (size) {
      case 'small': return '24px';
      case 'large': return '64px';
      default: return '48px';
    }
  }};
  height: ${({ size }) => {
    switch (size) {
      case 'small': return '24px';
      case 'large': return '64px';
      default: return '48px';
    }
  }};
  border: 4px solid ${({ theme }) => theme.colors.backgroundLight};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const LoaderText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;
  font-weight: 500;
`;