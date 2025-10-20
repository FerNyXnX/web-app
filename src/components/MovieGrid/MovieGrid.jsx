import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Grid, SectionTitle, EmptyState } from './MovieGrid.styles';

const MovieGrid = ({ movies, title, emptyMessage = 'No se encontraron películas' }) => {
  if (!movies || movies.length === 0) {
    return (
      <>
        {title && <SectionTitle>{title}</SectionTitle>}
        <EmptyState>
          <span>🎬</span>
          <p>{emptyMessage}</p>
        </EmptyState>
      </>
    );
  }

  return (
    <>
      {title && <SectionTitle>{title}</SectionTitle>}
      <Grid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </>
  );
};

export default MovieGrid;