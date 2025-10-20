import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundMedium};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 150%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  overflow: hidden;
`;

export const MovieImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.base};

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

export const ImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.backgroundLight},
    ${({ theme }) => theme.colors.backgroundMedium}
  );

  span {
    font-size: 4rem;
    opacity: 0.3;
  }
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const MovieTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MovieYear = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 0;
`;

export const RatingContainer = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
`;

export const RatingCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  border: 3px solid ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const RatingText = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme, $isFavorite }) => 
    $isFavorite ? theme.colors.primary : 'rgba(0, 0, 0, 0.6)'};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.base};
  backdrop-filter: blur(4px);
  z-index: 10;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const HeartIcon = styled.span`
  font-size: 1.25rem;
  line-height: 1;
  filter: ${({ $isFavorite }) => $isFavorite ? 'none' : 'grayscale(1)'};
`;