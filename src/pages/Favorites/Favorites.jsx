import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearAllFavorites } from '../../redux/slices/favoritesSlice';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import Button from '../../components/common/Button/Button';
import {
  FavoritesContainer,
  Header,
  HeaderContent,
  Title,
  Subtitle,
  ContentSection,
} from './Favorites.styles';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleClearAll = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar todos tus favoritos?')) {
      dispatch(clearAllFavorites());
    }
  };

  return (
    <FavoritesContainer>
      <Header>
        <HeaderContent>
          <div>
            <Title>❤️ Mis Favoritos</Title>
            <Subtitle>
              {favorites.length > 0
                ? `Tienes ${favorites.length} ${favorites.length === 1 ? 'película' : 'películas'} en tus favoritos`
                : 'Aún no has agregado películas a tus favoritos'}
            </Subtitle>
          </div>
          {favorites.length > 0 && (
            <Button variant="outline" onClick={handleClearAll}>
              🗑️ Limpiar Todo
            </Button>
          )}
        </HeaderContent>
      </Header>

      <ContentSection>
        <MovieGrid
          movies={favorites}
          emptyMessage="Empieza a agregar películas a tus favoritos para verlas aquí"
        />
      </ContentSection>
    </FavoritesContainer>
  );
};

export default Favorites;