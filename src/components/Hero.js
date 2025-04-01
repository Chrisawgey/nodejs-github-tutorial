import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaNodeJs, FaGithub, FaCode } from 'react-icons/fa';

const HeroContainer = styled.div`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xlarge} 0;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: ${props => props.theme.spacing.large};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  margin-top: ${props => props.theme.spacing.medium};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  border-radius: ${props => props.theme.borderRadius};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.small};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.hover};
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.white};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  font-size: 3rem;
  margin: ${props => props.theme.spacing.large} 0;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <div className="container">
        <HeroContent>
          <IconsContainer>
            <FaNodeJs />
            <FaGithub />
            <FaCode />
          </IconsContainer>
          <HeroTitle>Node.js & GitHub for Beginners</HeroTitle>
          <HeroSubtitle>
            Start your journey into server-side JavaScript and version control.
            This guide will walk you through everything you need to know to get started.
          </HeroSubtitle>
          <ButtonGroup>
            <PrimaryButton to="/what-is-nodejs">
              <FaNodeJs /> Learn Node.js
            </PrimaryButton>
            <SecondaryButton to="/github-intro">
              <FaGithub /> Explore GitHub
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

export default Hero;