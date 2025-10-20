import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/slices/favoritesSlice';
import { 
  getImageUrl, 
  formatDate, 
  formatRuntime, 
  getRatingPercentage,
  getRatingColor 
} from '../../utils/helpers';
import { IMAGE_SIZES } from '../../utils/constants';
import Button from '../common/Button/Button';
import {
  DetailContainer,
  BackdropContainer,
  Backdrop,
  BackdropOverlay,
  ContentContainer,
  PosterContainer,
  Poster,
  InfoContainer,
  Title,
  Tagline,
  MetaInfo,
  MetaItem,
  RatingContainer,
  RatingCircle,
  RatingText,
  Overview,
  OverviewTitle,
  GenreList,
  GenreTag,
  CastSection,
  CastTitle,
  CastGrid,
  CastCard,
  CastImage,
  CastName,
  CastCharacter,
  ButtonGroup,
} from './MovieDetail.styles';

const MovieDetail = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const backdropUrl = getImageUrl(movie.backdrop_path, IMAGE_SIZES.BACKDROP.LARGE);
  const posterUrl = getImageUrl(movie.poster_path, IMAGE_SIZES.POSTER.LARGE);
  const rating = getRatingPercentage(movie.vote_average);
  const ratingColor = getRatingColor(movie.vote_average);
  
  const cast = movie.credits?.cast?.slice(0, 6) || [];

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(movie));
  };

  return (
    <DetailContainer>
      {backdropUrl && (
        <BackdropContainer>
          <Backdrop src={backdropUrl} alt={movie.title} />
          <BackdropOverlay />
        </BackdropContainer>
      )}

      <ContentContainer>
        <PosterContainer>
          {posterUrl ? (
            <Poster src={posterUrl} alt={movie.title} />
          ) : (
            <Poster as="div" style={{ 
              background: 'linear-gradient(135deg, #2f2f2f, #1f1f1f)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem'
            }}>
              🎬
            </Poster>
          )}
        </PosterContainer>

        <InfoContainer>
          <Title>{movie.title}</Title>
          {movie.tagline && <Tagline>"{movie.tagline}"</Tagline>}

          <MetaInfo>
            <MetaItem>{formatDate(movie.release_date)}</MetaItem>
            {movie.runtime && (
              <>
                <span>•</span>
                <MetaItem>{formatRuntime(movie.runtime)}</MetaItem>
              </>
            )}
            {movie.genres && movie.genres.length > 0 && (
              <>
                <span>•</span>
                <MetaItem>
                  {movie.genres.map(g => g.name).join(', ')}
                </MetaItem>
              </>
            )}
          </MetaInfo>

          <RatingContainer>
            <RatingCircle $color={ratingColor}>
              <RatingText>{rating}%</RatingText>
            </RatingCircle>
            <span>Puntuación de usuarios</span>
          </RatingContainer>

          {movie.genres && movie.genres.length > 0 && (
            <GenreList>
              {movie.genres.map((genre) => (
                <GenreTag key={genre.id}>{genre.name}</GenreTag>
              ))}
            </GenreList>
          )}

          {movie.overview && (
            <>
              <OverviewTitle>Sinopsis</OverviewTitle>
              <Overview>{movie.overview}</Overview>
            </>
          )}

          <ButtonGroup>
            <Button
              variant={isFavorite ? 'primary' : 'outline'}
              onClick={handleFavoriteToggle}
            >
              {isFavorite ? '❤️ En Favoritos' : '🤍 Agregar a Favoritos'}
            </Button>
          </ButtonGroup>
        </InfoContainer>
      </ContentContainer>

      {cast.length > 0 && (
        <CastSection>
          <CastTitle>Reparto Principal</CastTitle>
          <CastGrid>
            {cast.map((member) => {
              const profileUrl = getImageUrl(member.profile_path, IMAGE_SIZES.PROFILE.MEDIUM);
              return (
                <CastCard key={member.id}>
                  {profileUrl ? (
                    <CastImage src={profileUrl} alt={member.name} />
                  ) : (
                    <CastImage as="div" style={{
                      background: 'linear-gradient(135deg, #2f2f2f, #1f1f1f)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem'
                    }}>
                      👤
                    </CastImage>
                  )}
                  <CastName>{member.name}</CastName>
                  <CastCharacter>{member.character}</CastCharacter>
                </CastCard>
              );
            })}
          </CastGrid>
        </CastSection>
      )}
    </DetailContainer>
  );
};

export default MovieDetail;