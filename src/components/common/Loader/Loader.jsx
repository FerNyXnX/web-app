import React from 'react';
import { LoaderContainer, Spinner, LoaderText } from './Loader.styles';

const Loader = ({ text = 'Cargando...', size = 'medium' }) => {
  return (
    <LoaderContainer>
      <Spinner size={size} />
      {text && <LoaderText>{text}</LoaderText>}
    </LoaderContainer>
  );
};

export default Loader;