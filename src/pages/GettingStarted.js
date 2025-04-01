import React from 'react';
import styled from 'styled-components';
import { 
  FaDownload, 
  FaCode, 
  FaBoxOpen, 
  FaDatabase,
  FaServer,
  FaCogs
} from 'react-icons/fa';

import Card from '../components/Card';
import CodeBlock from '../components/CodeBlock';
import StepsList from '../components/StepsList';

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

const InfoBox = styled.div`
  background-color: rgba(52, 152, 219, 0.1);
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.medium};
  margin: ${props => props.theme.spacing.medium} 0;
  border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
`;

const GettingStarted = () => {
  const installSteps = [
    {
      title: "Visit the Node.js Website",
      content: (
        <>
          <p>Go to <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a> and download the LTS (Long Term Support) version for your operating system.</p>
        </>
      )
    },
    {
      title: "Run the Installer",
      content: (
        <>
          <p>Double-click the downloaded file and follow the installation instructions for your operating system.</p>
        </>
      )
    },
    {
      title: "Verify Installation",
      content: (
        <>
          <p>Open your terminal or command prompt and verify that Node.js and npm are installed by running:</p>
          <CodeBlock language="bash">
{`node -v
npm -v`}
          </CodeBlock>
          <p>You should see version numbers displayed, confirming the installation.</p>
        </>
      )
    }
  ];

  const firstAppSteps = [
    {
      title: "Create a Project Directory",
      content: (
        <>
          <p>Create a new folder for your first Node.js project:</p>
          <CodeBlock language="bash">
{`mkdir my-first-node-app
cd my-first-node-app`}
          </CodeBlock>
        </>
      )
    },
    {
      title: "Initialize a Node.js Project",
      content: (
        <>
          <p>Initialize a new Node.js project with npm:</p>
          <CodeBlock language="bash">
{`npm init -y`}
          </CodeBlock>
          <p>This creates a package.json file with default values.</p>
        </>
      )
    },
    {
      title: "Create Your First JavaScript File",
      content: (
        <>
          <p>Create a file named app.js in your project directory:</p>
          <CodeBlock language="bash">
{`touch app.js`}
          </CodeBlock>
          <p>Or simply create a new file named app.js using your preferred code editor.</p>
        </>
      )
    },
    {
      title: "Write Your First Node.js Code",
      content: (
        <>
          <p>Open app.js in your code editor and add the following code:</p>
          <CodeBlock language="javascript" fileName="app.js">
{`// Import the HTTP module
const http = require('http');

// Define hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response
  res.end('Hello, World! My first Node.js server is running.\\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});`}
          </CodeBlock>
        </>
      )
    },
    {
      title: "Run Your Application",
      content: (
        <>
          <p>Run your Node.js application using the following command:</p>
          <CodeBlock language="bash">
{`node app.js`}
          </CodeBlock>
          <p>You should see the message: "Server running at http://127.0.0.1:3000/"</p>
        </>
      )
    },
    {
      title: "Test Your Server",
      content: (
        <>
          <p>Open your web browser and navigate to http://127.0.0.1:3000. You should see the message "Hello, World! My first Node.js server is running."</p>
          <p>Congratulations! You've created your first Node.js application.</p>
        </>
      )
    }
  ];

  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderContent>
            <PageTitle>Getting Started with Node.js</PageTitle>
            <PageDescription>
              Set up your development environment and build your first Node.js application
            </PageDescription>
          </HeaderContent>
        </div>
      </PageHeader>
      
      <div className="container">
        <Section>
          <Card icon={<FaDownload />} title="Installing Node.js">
            <p>
              Before you can start developing with Node.js, you need to install it on your computer. The installation process is straightforward and similar across different operating systems.
            </p>
            
            <StepsList steps={installSteps} />
            
            <InfoBox>
              <strong>Node Version Manager:</strong> For more flexibility in managing different Node.js versions, consider using nvm (Node Version Manager) for Unix/macOS or nvm-windows for Windows. This allows you to easily switch between different Node.js versions for different projects.
            </InfoBox>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Your First Node.js Application</SectionTitle>
          
          <Card icon={<FaCode />} title="Creating a Simple Web Server">
            <p>
              Let's create a simple "Hello World" web server as your first Node.js application. This will help you understand the basics of how Node.js works.
            </p>
            
            <StepsList steps={firstAppSteps} />
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Understanding npm</SectionTitle>
          
          <Card icon={<FaBoxOpen />} title="Node Package Manager">
            <p>
              npm (Node Package Manager) is the default package manager for Node.js and the world's largest software registry. With npm, you can:
            </p>
            
            <ul>
              <li>Install and manage project dependencies</li>
              <li>Run scripts defined in your package.json</li>
              <li>Share and distribute your own JavaScript code</li>
              <li>Access a vast ecosystem of open-source packages</li>
            </ul>
            
            <h3>Key npm Commands</h3>
            
            <CodeBlock language="bash" fileName="npm-commands.sh">
{`# Initialize a new Node.js project
npm init

# Install a package and save it as a dependency
npm install package-name

# Install a package and save it as a dev dependency
npm install package-name --save-dev

# Install all dependencies from package.json
npm install

# Run a script defined in package.json
npm run script-name

# Update all packages
npm update

# Install a package globally
npm install -g package-name`}
            </CodeBlock>
            
            <h3>The package.json File</h3>
            
            <p>
              The package.json file is the heart of any Node.js project. It contains metadata about your project and lists its dependencies.
            </p>
            
            <CodeBlock language="json" fileName="package.json">
{`{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "My first Node.js application",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": ["node", "javascript"],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}`}
            </CodeBlock>
            
            <InfoBox>
              <strong>Dependencies vs. DevDependencies:</strong> Regular dependencies (installed with npm install package-name) are required for your application to run in production. DevDependencies (installed with npm install package-name --save-dev) are only needed for development and testing.
            </InfoBox>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Building a REST API with Express</SectionTitle>
          
          <Card icon={<FaServer />} title="Introducing Express.js">
            <p>
              Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Let's create a simple REST API using Express.
            </p>
            
            <h3>1. Install Express</h3>
            
            <CodeBlock language="bash">
{`npm install express`}
            </CodeBlock>
            
            <h3>2. Create an Express Application</h3>
            
            <CodeBlock language="javascript" fileName="express-app.js">
{`// Import express
const express = require('express');

// Create express app
const app = express();

// Add middleware to parse JSON requests
app.use(express.json());

// Sample data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET route for the root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to my REST API with Express!');
});

// GET route to retrieve all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET route to retrieve a single user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  res.json(user);
});

// POST route to create a new user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  
  users.push(newUser);
  res.status(201).json(newUser);
});

// Define port
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});`}
            </CodeBlock>
            
            <h3>3. Run Your Express App</h3>
            
            <CodeBlock language="bash">
{`node express-app.js`}
            </CodeBlock>
            
            <p>
              You now have a simple REST API with endpoints to:
            </p>
            <ul>
              <li>GET / - Welcome message</li>
              <li>GET /api/users - List all users</li>
              <li>GET /api/users/:id - Get a single user by ID</li>
              <li>POST /api/users - Create a new user</li>
            </ul>
            
            <p>
              You can test these endpoints using a tool like <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a> or curl commands.
            </p>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Connecting to a Database</SectionTitle>
          
          <Card icon={<FaDatabase />} title="Working with MongoDB">
            <p>
              Most real-world applications need to store data in a database. Let's see how to connect Node.js to MongoDB, a popular NoSQL database.
            </p>
            
            <h3>1. Install MongoDB Driver</h3>
            
            <CodeBlock language="bash">
{`npm install mongodb`}
            </CodeBlock>
            
            <h3>2. Connect to MongoDB</h3>
            
            <CodeBlock language="javascript" fileName="mongodb-example.js">
{`// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');
    
    // Get reference to the database
    const db = client.db(dbName);
    
    // Get reference to the collection
    const collection = db.collection('users');
    
    // Insert a document
    const insertResult = await collection.insertOne({
      name: 'John Doe',
      email: 'john@example.com',
      createdAt: new Date()
    });
    console.log('Inserted document:', insertResult);
    
    // Find all documents
    const findResult = await collection.find({}).toArray();
    console.log('Found documents:', findResult);
    
    // Update a document
    const updateResult = await collection.updateOne(
      { name: 'John Doe' },
      { $set: { email: 'john.updated@example.com' } }
    );
    console.log('Updated document:', updateResult);
    
    // Find the updated document
    const updatedDoc = await collection.findOne({ name: 'John Doe' });
    console.log('Updated document:', updatedDoc);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

main().catch(console.error);`}
            </CodeBlock>
            
            <InfoBox>
              <strong>MongoDB Atlas:</strong> For easier setup, consider using <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noopener noreferrer">MongoDB Atlas</a>, a fully managed cloud database service that handles all the complexity of deploying, managing, and healing your deployments.
            </InfoBox>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Development Tools</SectionTitle>
          
          <Card icon={<FaCogs />} title="Enhancing Your Development Workflow">
            <p>
              Here are some tools and practices that can enhance your Node.js development workflow:
            </p>
            
            <h3>Nodemon for Auto-Restarting</h3>
            
            <p>
              Nodemon automatically restarts your Node.js application when file changes are detected, saving you from manually stopping and restarting your server.
            </p>
            
            <CodeBlock language="bash">
{`# Install nodemon globally
npm install -g nodemon

# Or as a dev dependency in your project
npm install nodemon --save-dev

# Run your app with nodemon
nodemon app.js`}
            </CodeBlock>
            
            <h3>Debugging with Node.js</h3>
            
            <p>
              Node.js has built-in debugging capabilities. You can use the inspect flag to start debugging:
            </p>
            
            <CodeBlock language="bash">
{`# Start Node.js in debug mode
node --inspect app.js

# Break on the first line of the program
node --inspect-brk app.js`}
            </CodeBlock>
            
            <p>
              Then open Chrome and navigate to chrome://inspect to access the debugging interface.
            </p>
            
            <h3>Environment Variables</h3>
            
            <p>
              Store configuration in the environment instead of hardcoding it in your application using the dotenv package:
            </p>
            
            <CodeBlock language="bash">
{`npm install dotenv`}
            </CodeBlock>
            
            <CodeBlock language="javascript" fileName=".env">
{`# .env file
PORT=3000
MONGODB_URI=mongodb://localhost:27017/myapp
NODE_ENV=development`}
            </CodeBlock>
            
            <CodeBlock language="javascript" fileName="config.js">
{`// Load environment variables from .env file
require('dotenv').config();

// Access environment variables
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;
const nodeEnv = process.env.NODE_ENV;

console.log(\`Server running in \${nodeEnv} mode on port \${port}\`);`}
            </CodeBlock>
            
            <h3>Testing with Jest</h3>
            
            <p>
              Jest is a popular testing framework for JavaScript applications:
            </p>
            
            <CodeBlock language="bash">
{`npm install jest --save-dev`}
            </CodeBlock>
            
            <CodeBlock language="javascript" fileName="sum.js">
{`function sum(a, b) {
  return a + b;
}

module.exports = sum;`}
            </CodeBlock>
            
            <CodeBlock language="javascript" fileName="sum.test.js">
{`const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});`}
            </CodeBlock>
            
            <p>
              Update your package.json to run tests:
            </p>
            
            <CodeBlock language="json">
{`"scripts": {
  "test": "jest"
}`}
            </CodeBlock>
            
            <p>
              Run your tests with:
            </p>
            
            <CodeBlock language="bash">
{`npm test`}
            </CodeBlock>
          </Card>
        </Section>
      </div>
    </>
  );
};

export default GettingStarted;