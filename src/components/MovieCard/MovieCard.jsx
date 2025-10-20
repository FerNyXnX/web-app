import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/slices/favoritesSlice';
import { getImageUrl, getRatingPercentage, getRatingColor } from '../../utils/helpers';
import { IMAGE_SIZES } from '../../utils/constants';
import {
  Card,
  ImageContainer,
  MovieImage,
  ImagePlaceholder,
  CardContent,
  MovieTitle,
  MovieYear,
  RatingContainer,
  RatingCircle,
  RatingText,
  FavoriteButton,
  HeartIcon,
} from './MovieCard.styles';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  
  const isFavorite = favorites.some(fav => fav.id === movie.id);
  const imageUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.POSTER.MEDIUM);
  const releaseYear = movie.release_date?.split('-')[0] || 'N/A';
  const rating = getRatingPercentage(movie.vote_average);
  const ratingColor = getRatingColor(movie.vote_average);

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(movie));
  };

  return (
    <Card onClick={handleCardClick}>
      <ImageContainer>
        {imageUrl ? (
          <MovieImage 
            src={imageUrl} 
            alt={movie.title}
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder>
            <span>🎬</span>
          </ImagePlaceholder>
        )}
        <FavoriteButton 
          onClick={handleFavoriteClick}
          $isFavorite={isFavorite}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        >
          <HeartIcon $isFavorite={isFavorite}>
            {isFavorite ? '❤️' : '🤍'}
            </HeartIcon>
        </FavoriteButton>
        <RatingContainer>
          <RatingCircle $color={ratingColor}>
            <RatingText>{rating}%</RatingText>
          </RatingCircle>
        </RatingContainer>
      </ImageContainer>
      <CardContent>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieYear>{releaseYear}</MovieYear>
      </CardContent>
    </Card>
  );
};

export default MovieCard;