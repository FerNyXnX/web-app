import styled from 'styled-components';

export const DetailContainer = styled.div`
  width: 100%;
`;

export const BackdropContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 300px;
  }
`;

export const Backdrop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BackdropOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(20, 20, 20, 0.7) 50%,
    ${({ theme }) => theme.colors.backgroundDark} 100%
  );
`;

export const ContentContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: -200px;
  position: relative;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    margin-top: -100px;
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const PosterContainer = styled.div`
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 250px;
    margin: 0 auto;
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const Tagline = styled.p`
  font-size: 1.125rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1rem;

  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const MetaItem = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const RatingCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border: 4px solid ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RatingText = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const GenreTag = styled.span`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  font-weight: 600;
`;

export const OverviewTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: ${({ theme }) => theme.spacing.md} 0 0 0;
`;

export const Overview = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const CastSection = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  }
`;

export const CastTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  display: inline-block;
`;

export const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const CastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CastImage = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const CastName = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const CastCharacter = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
`;