import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails, clearCurrentMovie } from '../../redux/slices/moviesSlice';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import Loader from '../../components/common/Loader/Loader';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';
import Button from '../../components/common/Button/Button';
import {
  MovieDetailsContainer,
  BackButtonContainer,
} from './MovieDetails.styles';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentMovie, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }

    // Cleanup al desmontar
    return () => {
      dispatch(clearCurrentMovie());
    };
  }, [id, dispatch]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRetry = () => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }
  };

  if (loading) {
    return <Loader text="Cargando detalles de la película..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={handleRetry} />;
  }

  if (!currentMovie) {
    return null;
  }

  return (
    <MovieDetailsContainer>
      <BackButtonContainer>
        <Button variant="ghost" onClick={handleGoBack}>
          ← Volver
        </Button>
      </BackButtonContainer>
      <MovieDetail movie={currentMovie} />
    </MovieDetailsContainer>
  );
};

export default MovieDetails;