import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const BackButtonContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;