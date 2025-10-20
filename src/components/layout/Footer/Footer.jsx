import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterText,
  FooterLink,
  FooterLinks,
} from './Footer.styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © {currentYear} MovieExplorer. Todos los derechos reservados.
        </FooterText>
        <FooterLinks>
          <FooterLink 
            href="https://www.themoviedb.org/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Powered by TMDB
          </FooterLink>
          <FooterText>|</FooterText>
          <FooterLink 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;