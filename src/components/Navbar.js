import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.light};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.medium} 0;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 0;
  margin-bottom: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.large};
    background-color: ${props => props.theme.colors.dark};
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 101;
    
    li {
      margin: ${props => props.theme.spacing.medium} 0;
    }
  }
`;

const NavItem = styled.li`
  margin: 0 ${props => props.theme.spacing.medium};
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.borderRadius};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    color: ${props => props.theme.colors.white};
    display: block;
    
    &:hover {
      background-color: ${props => props.theme.colors.primary};
    }
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 100;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <div className="container">
        <NavContainer>
          <Logo to="/">Node.js & GitHub Guide</Logo>
          <MenuIcon onClick={toggleMenu}>
            <FaBars />
          </MenuIcon>
          <NavLinks isOpen={isOpen}>
            <CloseIcon onClick={closeMenu}>
              <FaTimes />
            </CloseIcon>
            <NavItem>
              <NavLink to="/what-is-nodejs" onClick={closeMenu}>What is Node.js</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/getting-started" onClick={closeMenu}>Getting Started</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/javascript-basics" onClick={closeMenu}>JS Basics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/github-intro" onClick={closeMenu}>GitHub Intro</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/resources" onClick={closeMenu}>Resources</NavLink>
            </NavItem>
          </NavLinks>
        </NavContainer>
      </div>
      <Overlay isOpen={isOpen} onClick={closeMenu} />
    </Nav>
  );
};

export default Navbar;