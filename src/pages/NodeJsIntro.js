import React from 'react';
import styled from 'styled-components';
import { FaServer, FaPuzzlePiece, FaLightbulb, FaRocket, FaNodeJs } from 'react-icons/fa';

import Card from '../components/Card';
import CodeBlock from '../components/CodeBlock';

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
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.large};
  margin-top: ${props => props.theme.spacing.large};
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.medium};
  padding: ${props => props.theme.spacing.large};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.hover};
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const FeatureTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.small};
`;

const InfoBox = styled.div`
  background-color: rgba(52, 152, 219, 0.1);
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.medium};
  margin: ${props => props.theme.spacing.medium} 0;
  border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
`;

const NodeJsIntro = () => {
  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderContent>
            <PageTitle>What is Node.js?</PageTitle>
            <PageDescription>
              Understanding the JavaScript runtime that revolutionized backend development
            </PageDescription>
          </HeaderContent>
        </div>
      </PageHeader>
      
      <div className="container">
        <Section>
          <Card icon={<FaNodeJs />} title="Node.js Explained">
            <p>
              Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. Unlike traditional JavaScript that runs in the browser, Node.js allows you to run JavaScript on the server side.
            </p>
            
            <p>
              Created by Ryan Dahl in 2009, Node.js was designed to build scalable network applications. By using an event-driven, non-blocking I/O model, Node.js is lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
            </p>
            
            <InfoBox>
              <strong>Did you know?</strong> JavaScript was originally created to run only in web browsers. Node.js revolutionized web development by enabling JavaScript to run on servers, creating the possibility for full-stack JavaScript development.
            </InfoBox>
            
            <p>
              The ability to use JavaScript for both frontend and backend development has simplified the development process for many teams, allowing for code sharing between client and server sides, and enabling developers to specialize in a single language.
            </p>
            
            <CodeBlock language="javascript" fileName="simple-server.js">
{`// Import the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body
  res.end('Hello World from Node.js!\\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});`}
            </CodeBlock>
            
            <p>
              The code above demonstrates a simple Node.js server that responds with "Hello World from Node.js!" when accessed. This is one of the most basic examples of a Node.js application, but it showcases the power and simplicity of server-side JavaScript.
            </p>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Why Choose Node.js?</SectionTitle>
          
          <p>
            Node.js has become a popular choice for web development for many reasons. Here are some of the key advantages of using Node.js for your next project:
          </p>
          
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>
                <FaServer />
              </FeatureIcon>
              <FeatureTitle>Single Language Stack</FeatureTitle>
              <p>
                Use JavaScript for both client and server-side development, eliminating the need to switch contexts between different programming languages.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaPuzzlePiece />
              </FeatureIcon>
              <FeatureTitle>Rich Ecosystem</FeatureTitle>
              <p>
                Access thousands of open-source packages via npm (Node Package Manager) to accelerate development and solve common problems.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaLightbulb />
              </FeatureIcon>
              <FeatureTitle>Non-Blocking I/O</FeatureTitle>
              <p>
                Handle multiple concurrent connections efficiently with event-driven, asynchronous architecture, perfect for real-time applications.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaRocket />
              </FeatureIcon>
              <FeatureTitle>High Performance</FeatureTitle>
              <p>
                Built on Chrome's V8 JavaScript engine, Node.js offers fast execution of code and efficient memory usage for scalable applications.
              </p>
            </FeatureCard>
          </FeatureGrid>
        </Section>
        
        <Section>
          <SectionTitle>When to Use Node.js</SectionTitle>
          
          <Card>
            <p>
              While Node.js is powerful, it's important to understand when it's the right tool for the job. Node.js excels in the following scenarios:
            </p>
            
            <ul>
              <li>
                <strong>Real-time applications:</strong> Chat applications, live updates, and collaborative tools benefit from Node.js's event-driven architecture.
              </li>
              <li>
                <strong>Single-page applications (SPAs):</strong> Node.js works well with modern JavaScript frameworks like React, Angular, and Vue.js.
              </li>
              <li>
                <strong>APIs and microservices:</strong> Build lightweight, fast, and scalable services that can be deployed independently.
              </li>
              <li>
                <strong>Streaming applications:</strong> Node.js's ability to process data as it's being received makes it ideal for video or file streaming.
              </li>
              <li>
                <strong>IoT applications:</strong> The lightweight nature of Node.js makes it suitable for Internet of Things devices.
              </li>
            </ul>
            
            <p>
              However, Node.js might not be the best choice for CPU-intensive applications, as its single-threaded nature can become a bottleneck for heavy computations. For such cases, you might want to consider other technologies or implement worker threads in Node.js.
            </p>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Node.js Architecture</SectionTitle>
          
          <Card>
            <p>
              At its core, Node.js uses an event-driven, non-blocking I/O model. This means that instead of waiting for an operation to complete before moving on to the next one, Node.js registers a callback and continues processing other tasks.
            </p>
            
            <p>
              Here's a simplified view of how Node.js works:
            </p>
            
            <ol>
              <li>The client sends a request to the Node.js server.</li>
              <li>Node.js adds the request to an event queue.</li>
              <li>The event loop processes the request, registering any I/O operations with callbacks.</li>
              <li>When an I/O operation completes, its callback is triggered, and the response is sent back to the client.</li>
            </ol>
            
            <p>
              This architecture allows Node.js to handle thousands of concurrent connections with a single server, making it highly efficient for I/O-bound applications.
            </p>
            
            <CodeBlock language="javascript" fileName="event-loop-example.js">
{`console.log('Start program');

// Set a timeout of 2 seconds
setTimeout(() => {
  console.log('Timeout callback executed after 2 seconds');
}, 2000);

// This will be executed immediately after the setTimeout is registered
console.log('End program');

// Output:
// Start program
// End program
// Timeout callback executed after 2 seconds`}
            </CodeBlock>
            
            <p>
              In the example above, the program doesn't wait for the timeout to complete before continuing execution. This demonstrates the non-blocking nature of Node.js, which is a key aspect of its architecture.
            </p>
          </Card>
        </Section>
      </div>
    </>
  );
};

export default NodeJsIntro;