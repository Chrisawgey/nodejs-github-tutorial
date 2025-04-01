import React from 'react';
import styled from 'styled-components';
import { 
  FaBook, 
  FaVideo, 
  FaGlobe, 
  FaGithub, 
  FaNodeJs,
  FaCode,
  FaExternalLinkAlt
} from 'react-icons/fa';

const PageHeader = styled.div`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%);
  color: white;
  padding: ${props => props.theme.spacing.xlarge} 0;
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

const HeaderContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const PageTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const PageDescription = styled.p`
  font-size: 1.2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.large};
  text-align: center;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.large};
`;

const ResourceCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.medium};
  padding: ${props => props.theme.spacing.large};
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.hover};
  }
`;

const ResourceIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const ResourceTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.small};
`;

const ResourceDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing.medium};
  flex-grow: 1;
`;

const ResourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.small};
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const ProjectCard = styled(ResourceCard)`
  border-top: 4px solid ${props => props.theme.colors.secondary};
`;

const ProjectLevel = styled.span`
  display: inline-block;
  background-color: ${props => props.level === 'Beginner' 
    ? '#4caf50' 
    : props.level === 'Intermediate' 
      ? '#ff9800' 
      : '#f44336'};
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-left: ${props => props.theme.spacing.small};
  vertical-align: middle;
`;

const NewsletterSection = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.medium};
  padding: ${props => props.theme.spacing.large};
  margin-top: ${props => props.theme.spacing.xlarge};
  text-align: center;
`;

const NewsletterTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const NewsletterForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${props => props.theme.spacing.medium};
  border: 1px solid #ddd;
  border-radius: ${props => props.theme.borderRadius} 0 0 ${props => props.theme.borderRadius};
  font-size: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0 0;
  }
`;

const NewsletterButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: 0 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius};
  }
`;

const ResourceTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: ${props => props.theme.spacing.small};
  margin-bottom: ${props => props.theme.spacing.small};
`;

const ResourceTag = styled.span`
  background-color: rgba(52, 152, 219, 0.1);
  color: ${props => props.theme.colors.primary};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const Resources = () => {
  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderContent>
            <PageTitle>Learning Resources</PageTitle>
            <PageDescription>
              Enhance your Node.js and GitHub skills with these carefully selected resources
            </PageDescription>
          </HeaderContent>
        </div>
      </PageHeader>
      
      <div className="container">
        <Section>
          <SectionTitle>Official Documentation</SectionTitle>
          
          <ResourcesGrid>
            <ResourceCard>
              <ResourceIcon>
                <FaNodeJs />
              </ResourceIcon>
              <ResourceTitle>Node.js Documentation</ResourceTitle>
              <ResourceDescription>
                The official Node.js documentation provides comprehensive guides, API references, and best practices directly from the source.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Official</ResourceTag>
                <ResourceTag>Reference</ResourceTag>
                <ResourceTag>Free</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer">
                Visit Documentation <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
            
            <ResourceCard>
              <ResourceIcon>
                <FaCode />
              </ResourceIcon>
              <ResourceTitle>Express.js Documentation</ResourceTitle>
              <ResourceDescription>
                Learn about Express, the most popular web framework for Node.js, with official guides and API references.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Framework</ResourceTag>
                <ResourceTag>Reference</ResourceTag>
                <ResourceTag>Free</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                Visit Documentation <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
            
            <ResourceCard>
              <ResourceIcon>
                <FaGithub />
              </ResourceIcon>
              <ResourceTitle>GitHub Docs</ResourceTitle>
              <ResourceDescription>
                Comprehensive documentation for all GitHub features, including guides on Git, GitHub Actions, and collaboration workflows.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Official</ResourceTag>
                <ResourceTag>Reference</ResourceTag>
                <ResourceTag>Free</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://docs.github.com/en" target="_blank" rel="noopener noreferrer">
                Visit Documentation <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
          </ResourcesGrid>
        </Section>
        
        <Section>
          <SectionTitle>Online Courses</SectionTitle>
          
          <ResourcesGrid>
            <ResourceCard>
              <ResourceIcon>
                <FaVideo />
              </ResourceIcon>
              <ResourceTitle>Node.js for Beginners</ResourceTitle>
              <ResourceDescription>
                A comprehensive video course that takes you from the basics of Node.js to building complete web applications.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Beginner</ResourceTag>
                <ResourceTag>Video</ResourceTag>
                <ResourceTag>Paid</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://www.udemy.com/course/nodejs-the-complete-guide/" target="_blank" rel="noopener noreferrer">
                View Course <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
            
            <ResourceCard>
              <ResourceIcon>
                <FaVideo />
              </ResourceIcon>
              <ResourceTitle>Git & GitHub Crash Course</ResourceTitle>
              <ResourceDescription>
                Learn the essentials of Git and GitHub in this focused course, perfect for beginners looking to master version control.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Beginner</ResourceTag>
                <ResourceTag>Video</ResourceTag>
                <ResourceTag>Free</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://www.youtube.com/watch?v=RGOj5yH7evk" target="_blank" rel="noopener noreferrer">
                Watch Tutorial <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
            
            <ResourceCard>
              <ResourceIcon>
                <FaVideo />
              </ResourceIcon>
              <ResourceTitle>Advanced Node.js Concepts</ResourceTitle>
              <ResourceDescription>
                Dive deeper into Node.js with this advanced course covering streams, clustering, performance optimization, and more.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Advanced</ResourceTag>
                <ResourceTag>Video</ResourceTag>
                <ResourceTag>Paid</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://www.udemy.com/course/advanced-node-for-developers/" target="_blank" rel="noopener noreferrer">
                View Course <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
          </ResourcesGrid>
        </Section>
        
        <Section>
          <SectionTitle>Books & Articles</SectionTitle>
          
          <ResourcesGrid>
            <ResourceCard>
              <ResourceIcon>
                <FaBook />
              </ResourceIcon>
              <ResourceTitle>Node.js Design Patterns</ResourceTitle>
              <ResourceDescription>
                A comprehensive guide to implementing design patterns in Node.js applications, helping you write more maintainable and scalable code.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Intermediate</ResourceTag>
                <ResourceTag>Book</ResourceTag>
                <ResourceTag>Paid</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://www.packtpub.com/product/node-js-design-patterns-third-edition/9781839214110" target="_blank" rel="noopener noreferrer">
                Learn More <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
            
            <ResourceCard>
              <ResourceIcon>
                <FaBook />
              </ResourceIcon>
              <ResourceTitle>Pro Git</ResourceTitle>
              <ResourceDescription>
                The complete guide to Git, available online for free. Written by Git experts Scott Chacon and Ben Straub.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>All Levels</ResourceTag>
                <ResourceTag>Book</ResourceTag>
                <ResourceTag>Free</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://git-scm.com/book/en/v2" target="_blank" rel="noopener noreferrer">
                Read Online <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
            
            <ResourceCard>
              <ResourceIcon>
                <FaGlobe />
              </ResourceIcon>
              <ResourceTitle>Node.js Best Practices</ResourceTitle>
              <ResourceDescription>
                A collection of best practices and tips for writing production-ready Node.js applications, curated by the community.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Intermediate</ResourceTag>
                <ResourceTag>Article</ResourceTag>
                <ResourceTag>Free</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://github.com/goldbergyoni/nodebestpractices" target="_blank" rel="noopener noreferrer">
                Read Guide <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
          </ResourcesGrid>
        </Section>
        
        <Section>
          <SectionTitle>Practice Projects</SectionTitle>
          
          <ResourcesGrid>
            <ProjectCard>
              <ResourceIcon>
                <FaCode />
              </ResourceIcon>
              <ResourceTitle>
                ToDo List API
                <ProjectLevel level="Beginner">Beginner</ProjectLevel>
              </ResourceTitle>
              <ResourceDescription>
                Create a simple REST API for a todo list application using Node.js and Express. This project will help you understand routing, middleware, and basic CRUD operations.
              </ResourceDescription>
              <ul>
                <li>Set up a basic Express server</li>
                <li>Implement routes for creating, reading, updating, and deleting tasks</li>
                <li>Store data in memory or a JSON file</li>
                <li>Implement input validation</li>
                <li>Add basic authentication</li>
              </ul>
            </ProjectCard>
            
            <ProjectCard>
              <ResourceIcon>
                <FaCode />
              </ResourceIcon>
              <ResourceTitle>
                Real-time Chat Application
                <ProjectLevel level="Intermediate">Intermediate</ProjectLevel>
              </ResourceTitle>
              <ResourceDescription>
                Build a real-time chat application using Node.js, Express, and Socket.IO. This project will teach you about WebSockets and real-time communication.
              </ResourceDescription>
              <ul>
                <li>Set up an Express server with Socket.IO</li>
                <li>Implement user authentication</li>
                <li>Create chat rooms and private messaging</li>
                <li>Add features like typing indicators and online status</li>
                <li>Store chat history in a database</li>
              </ul>
            </ProjectCard>
            
            <ProjectCard>
              <ResourceIcon>
                <FaCode />
              </ResourceIcon>
              <ResourceTitle>
                E-commerce API
                <ProjectLevel level="Advanced">Advanced</ProjectLevel>
              </ResourceTitle>
              <ResourceDescription>
                Develop a complete e-commerce API with Node.js, Express, and MongoDB. This project will cover advanced topics like authentication, file uploads, and payment processing.
              </ResourceDescription>
              <ul>
                <li>Design and implement a RESTful API</li>
                <li>Set up user authentication with JWT</li>
                <li>Create models for products, orders, and users</li>
                <li>Implement product search and filtering</li>
                <li>Add payment processing with Stripe</li>
                <li>Handle file uploads for product images</li>
              </ul>
            </ProjectCard>
          </ResourcesGrid>
        </Section>
        
        <Section>
          <SectionTitle>Community Resources</SectionTitle>
          
          <ResourcesGrid>
            <ResourceCard>
              <ResourceIcon>
                <FaGlobe />
              </ResourceIcon>
              <ResourceTitle>Node.js Reddit Community</ResourceTitle>
              <ResourceDescription>
                Join the Node.js subreddit to connect with other developers, ask questions, and share your projects.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Community</ResourceTag>
                <ResourceTag>Discussion</ResourceTag>
                <ResourceTag>Free</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://www.reddit.com/r/node/" target="_blank" rel="noopener noreferrer">
                Join Community <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
            
            <ResourceCard>
              <ResourceIcon>
                <FaGlobe />
              </ResourceIcon>
              <ResourceTitle>Stack Overflow</ResourceTitle>
              <ResourceDescription>
                Find answers to your Node.js and GitHub questions on Stack Overflow, the largest developer Q&A platform.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Q&A</ResourceTag>
                <ResourceTag>Support</ResourceTag>
                <ResourceTag>Free</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://stackoverflow.com/questions/tagged/node.js" target="_blank" rel="noopener noreferrer">
                Browse Questions <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
            
            <ResourceCard>
              <ResourceIcon>
                <FaGithub />
              </ResourceIcon>
              <ResourceTitle>Open Source Projects</ResourceTitle>
              <ResourceDescription>
                Contribute to open source Node.js projects on GitHub to gain real-world experience and collaborate with other developers.
              </ResourceDescription>
              <ResourceTagsContainer>
                <ResourceTag>Practice</ResourceTag>
                <ResourceTag>Collaboration</ResourceTag>
                <ResourceTag>Free</ResourceTag>
              </ResourceTagsContainer>
              <ResourceLink href="https://github.com/topics/nodejs" target="_blank" rel="noopener noreferrer">
                Explore Projects <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
          </ResourcesGrid>
        </Section>
        
        <NewsletterSection>
          <NewsletterTitle>Stay Updated with Node.js & GitHub News</NewsletterTitle>
          <p>Subscribe to our newsletter to receive the latest tutorials, tips, and resources.</p>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Your email address" />
            <NewsletterButton type="submit">Subscribe</NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>
      </div>
    </>
  );
};

export default Resources;