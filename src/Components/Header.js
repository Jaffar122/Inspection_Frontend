import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: #000;
  color: #fff;
  padding: 60px 0; /* Increased padding for taller header */
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <Logo>Inspection App</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/details">Details</NavLink>
        </NavLinks>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
