import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaNodeJs, FaGithub, FaCode, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.large} 0;
  margin-top: ${props => props.theme.spacing.xlarge};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.large};
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.white};
`;

const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: ${props => props.theme.spacing.small};
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.light};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.light};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${props => props.theme.spacing.large};
  padding-top: ${props => props.theme.spacing.medium};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.light};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing.small};
`;

const IconGroup = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  margin-top: ${props => props.theme.spacing.medium};
  
  svg {
    font-size: 1.5rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <FooterTitle>Node.js & GitHub Guide</FooterTitle>
            <p>A comprehensive guide to get you started with Node.js development and version control with GitHub.</p>
            <IconGroup>
              <FaNodeJs />
              <FaGithub />
              <FaCode />
            </IconGroup>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <StyledLink to="/">Home</StyledLink>
              </FooterLink>
              <FooterLink>
                <StyledLink to="/what-is-nodejs">What is Node.js</StyledLink>
              </FooterLink>
              <FooterLink>
                <StyledLink to="/getting-started">Getting Started</StyledLink>
              </FooterLink>
              <FooterLink>
                <StyledLink to="/javascript-basics">JavaScript Basics</StyledLink>
              </FooterLink>
              <FooterLink>
                <StyledLink to="/github-intro">GitHub Intro</StyledLink>
              </FooterLink>
              <FooterLink>
                <StyledLink to="/resources">Resources</StyledLink>
              </FooterLink>
            </FooterLinks>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>External Resources</FooterTitle>
            <FooterLinks>
              <FooterLink>
                <ExternalLink href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                  Node.js Official
                </ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">
                  npm Registry
                </ExternalLink>
              </FooterLink>
              <FooterLink>
                <ExternalLink href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  React.js
                </ExternalLink>
              </FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          <span>Made with</span> <FaHeart style={{ color: '#e74c3c' }} /> <span>by Developers for Developers</span>
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;