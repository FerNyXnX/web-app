import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../../redux/slices/moviesSlice';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import Loader from '../../components/common/Loader/Loader';
import ErrorMessage from '../../components/common/ErrorMessage/ErrorMessage';
import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  ContentSection,
  Section,
} from './Home.styles';

const Home = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  
  const dispatch = useDispatch();
  const { 
    popularMovies, 
    topRatedMovies, 
    upcomingMovies, 
    searchResults, 
    searchQuery,
    loading, 
    error 
  } = useSelector((state) => state.movies);

  useEffect(() => {
    // Solo cargar una vez al montar el componente
    if (!hasLoaded) {
      dispatch(fetchPopularMovies());
      dispatch(fetchTopRatedMovies());
      dispatch(fetchUpcomingMovies());
      setHasLoaded(true);
    }
  }, [dispatch, hasLoaded]);

  const handleSearch = (query) => {
    setIsSearching(!!query);
  };

  if (loading && popularMovies.length === 0) {
    return <Loader text="Cargando películas..." />;
  }

  if (error && popularMovies.length === 0) {
    return (
      <ErrorMessage 
        message={error} 
        onRetry={() => {
          dispatch(fetchPopularMovies());
          dispatch(fetchTopRatedMovies());
          dispatch(fetchUpcomingMovies());
        }}
      />
    );
  }

  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>Descubre tu próxima película favorita</HeroTitle>
        <HeroSubtitle>
          Explora millones de películas, encuentra las mejores recomendaciones y
          guarda tus favoritas
        </HeroSubtitle>
        <SearchBar onSearch={handleSearch} />
      </HeroSection>

      <ContentSection>
        {isSearching ? (
          <Section>
            <MovieGrid
              movies={searchResults}
              title={`Resultados para "${searchQuery}"`}
              emptyMessage="No se encontraron películas con ese término"
            />
          </Section>
        ) : (
          <>
            <Section>
              <MovieGrid movies={popularMovies} title="🔥 Películas Populares" />
            </Section>

            <Section>
              <MovieGrid movies={topRatedMovies} title="⭐ Mejor Valoradas" />
            </Section>

            <Section>
              <MovieGrid movies={upcomingMovies} title="🎬 Próximos Estrenos" />
            </Section>
          </>
        )}
      </ContentSection>
    </HomeContainer>
  );
};

export default Home;