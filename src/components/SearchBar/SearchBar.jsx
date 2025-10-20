import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies, clearSearchResults } from '../../redux/slices/moviesSlice';
import useDebounce from '../../hooks/useDebounce';
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
  ClearButton,
} from './SearchBar.styles';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const dispatch = useDispatch();
  const previousSearchTerm = useRef('');

  useEffect(() => {
    // Solo buscar si el término ha cambiado realmente
    if (debouncedSearchTerm !== previousSearchTerm.current) {
      previousSearchTerm.current = debouncedSearchTerm;
      
      if (debouncedSearchTerm.trim()) {
        dispatch(searchMovies({ query: debouncedSearchTerm }));
        if (onSearch) {
          onSearch(debouncedSearchTerm);
        }
      } else {
        dispatch(clearSearchResults());
        if (onSearch) {
          onSearch('');
        }
      }
    }
  }, [debouncedSearchTerm]); // Removemos dispatch y onSearch de las dependencias

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
    previousSearchTerm.current = '';
    dispatch(clearSearchResults());
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <SearchContainer>
      <SearchIcon>🔍</SearchIcon>
      <SearchInput
        type="text"
        placeholder="Buscar películas..."
        value={searchTerm}
        onChange={handleChange}
        aria-label="Buscar películas"
      />
      {searchTerm && (
        <ClearButton onClick={handleClear} aria-label="Limpiar búsqueda">
          ✕
        </ClearButton>
      )}
    </SearchContainer>
  );
};

export default SearchBar;