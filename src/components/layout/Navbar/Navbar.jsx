import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Nav,
  NavContainer,
  Logo,
  NavLinks,
  NavLink,
  FavoriteBadge,
  MenuButton,
  MobileMenu,
} from './Navbar.styles';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const favorites = useSelector((state) => state.favorites.favorites);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/" onClick={closeMenu}>
          🎬 MovieExplorer
        </Logo>

        <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>

        {/* CAMBIO: isOpen → $isOpen */}
        <NavLinks $isOpen={isMenuOpen}>
          <NavLink
            to="/"
            $active={location.pathname === '/'}
            onClick={closeMenu}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/favorites"
            $active={location.pathname === '/favorites'}
            onClick={closeMenu}
          >
            Favoritos
            {favorites.length > 0 && (
              <FavoriteBadge>{favorites.length}</FavoriteBadge>
            )}
          </NavLink>
        </NavLinks>

        {isMenuOpen && <MobileMenu onClick={closeMenu} />}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;