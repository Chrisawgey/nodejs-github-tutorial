import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
  FaNodeJs, 
  FaGithub, 
  FaCode, 
  FaServer, 
  FaFileCode, 
  FaCodeBranch, 
  FaArrowRight 
} from 'react-icons/fa';

import Hero from '../components/Hero';
import Card from '../components/Card';

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.large};
`;

const FeatureCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureFooter = styled.div`
  margin-top: ${props => props.theme.spacing.medium};
`;

const FeatureLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.small};
  font-weight: 500;
  
  &:hover {
    gap: ${props => props.theme.spacing.medium};
  }
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: row;
  }
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  padding: ${props => props.theme.spacing.large};
  position: relative;
  
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
      top: 50%;
      right: -10px;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border-top: 2px solid ${props => props.theme.colors.primary};
      border-right: 2px solid ${props => props.theme.colors.primary};
      transform: translateY(-50%) rotate(45deg);
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 20px;
      border-bottom: 2px solid ${props => props.theme.colors.primary};
      border-right: 2px solid ${props => props.theme.colors.primary};
      transform: translateX(-50%) rotate(45deg);
    }
  }
`;

const StepIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const StepTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.small};
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%);
  padding: ${props => props.theme.spacing.xlarge} 0;
  color: white;
  text-align: center;
  border-radius: ${props => props.theme.borderRadius};
  margin-top: ${props => props.theme.spacing.xlarge};
`;

const CTATitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.medium};
  color: white;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  border-radius: ${props => props.theme.borderRadius};
  margin-top: ${props => props.theme.spacing.medium};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.hover};
    color: ${props => props.theme.colors.primary};
  }
`;

const Home = () => {
  return (
    <>
      <Hero />
      
      <section>
        <div className="container">
          <SectionTitle>What You'll Learn</SectionTitle>
          
          <FeaturesGrid>
            <FeatureCard>
              <FeatureContent>
                <StepIcon><FaNodeJs /></StepIcon>
                <StepTitle>Node.js Basics</StepTitle>
                <p>Understand what Node.js is, how it works, and why it's revolutionizing backend development with JavaScript.</p>
              </FeatureContent>
              <FeatureFooter>
                <FeatureLink to="/what-is-nodejs">
                  Learn about Node.js <FaArrowRight />
                </FeatureLink>
              </FeatureFooter>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureContent>
                <StepIcon><FaServer /></StepIcon>
                <StepTitle>Server-Side Development</StepTitle>
                <p>Learn how to create web servers, APIs, and backend applications using JavaScript and Node.js.</p>
              </FeatureContent>
              <FeatureFooter>
                <FeatureLink to="/getting-started">
                  Start building <FaArrowRight />
                </FeatureLink>
              </FeatureFooter>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureContent>
                <StepIcon><FaFileCode /></StepIcon>
                <StepTitle>JavaScript Essentials</StepTitle>
                <p>Master the JavaScript concepts necessary for effective Node.js development and modern web applications.</p>
              </FeatureContent>
              <FeatureFooter>
                <FeatureLink to="/javascript-basics">
                  JavaScript basics <FaArrowRight />
                </FeatureLink>
              </FeatureFooter>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureContent>
                <StepIcon><FaGithub /></StepIcon>
                <StepTitle>GitHub Fundamentals</StepTitle>
                <p>Discover how GitHub works for version control, collaboration, and open-source contribution.</p>
              </FeatureContent>
              <FeatureFooter>
                <FeatureLink to="/github-intro">
                  Explore GitHub <FaArrowRight />
                </FeatureLink>
              </FeatureFooter>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureContent>
                <StepIcon><FaCodeBranch /></StepIcon>
                <StepTitle>Version Control</StepTitle>
                <p>Learn how to track changes, collaborate with other developers, and manage your codebase effectively.</p>
              </FeatureContent>
              <FeatureFooter>
                <FeatureLink to="/github-intro#version-control">
                  Master version control <FaArrowRight />
                </FeatureLink>
              </FeatureFooter>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureContent>
                <StepIcon><FaCode /></StepIcon>
                <StepTitle>Practical Projects</StepTitle>
                <p>Apply your knowledge with hands-on projects that reinforce concepts and build your portfolio.</p>
              </FeatureContent>
              <FeatureFooter>
                <FeatureLink to="/resources">
                  Find projects <FaArrowRight />
                </FeatureLink>
              </FeatureFooter>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </section>
      
      <section>
        <div className="container">
          <SectionTitle>Learning Path</SectionTitle>
          
          <ProcessSteps>
            <Step>
              <StepIcon><FaNodeJs /></StepIcon>
              <StepTitle>Learn Concepts</StepTitle>
              <p>Understand the fundamentals of Node.js, npm, and server-side JavaScript.</p>
            </Step>
            
            <Step>
              <StepIcon><FaCode /></StepIcon>
              <StepTitle>Build Projects</StepTitle>
              <p>Create your first applications with guided tutorials and examples.</p>
            </Step>
            
            <Step>
              <StepIcon><FaGithub /></StepIcon>
              <StepTitle>Share & Collaborate</StepTitle>
              <p>Use GitHub to manage your code and collaborate with others.</p>
            </Step>
          </ProcessSteps>
          
          <CTASection>
            <div className="container">
              <CTATitle>Ready to Start Your Journey?</CTATitle>
              <p>Dive into Node.js development and learn how to build modern web applications.</p>
              <CTAButton to="/what-is-nodejs">Get Started Now</CTAButton>
            </div>
          </CTASection>
        </div>
      </section>
    </>
  );
};

export default Home;