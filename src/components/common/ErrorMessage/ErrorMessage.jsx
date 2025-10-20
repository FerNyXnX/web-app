import React from 'react';
import { ErrorContainer, ErrorIcon, ErrorText, RetryButton } from './ErrorMessage.styles';

const ErrorMessage = ({ 
  message = 'Ocurrió un error al cargar los datos', 
  onRetry 
}) => {
  return (
    <ErrorContainer>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorText>{message}</ErrorText>
      {onRetry && (
        <RetryButton onClick={onRetry}>
          Intentar nuevamente
        </RetryButton>
      )}
    </ErrorContainer>
  );
};

export default ErrorMessage;