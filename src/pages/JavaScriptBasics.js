import React from 'react';
import styled from 'styled-components';
import { 
  FaCode, 
  FaLaptopCode, 
  FaClock, 
  FaProjectDiagram,
  FaObjectGroup,
  FaExchangeAlt
} from 'react-icons/fa';

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

const InfoBox = styled.div`
  background-color: rgba(52, 152, 219, 0.1);
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.medium};
  margin: ${props => props.theme.spacing.medium} 0;
  border-radius: 0 ${props => props.theme.borderRadius} ${props => props.theme.borderRadius} 0;
`;

const JavaScriptBasics = () => {
  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderContent>
            <PageTitle>JavaScript Basics for Node.js</PageTitle>
            <PageDescription>
              Essential JavaScript concepts you need to know for Node.js development
            </PageDescription>
          </HeaderContent>
        </div>
      </PageHeader>
      
      <div className="container">
        <Section>
          <Card icon={<FaCode />} title="Why JavaScript Matters for Node.js">
            <p>
              Since Node.js uses JavaScript as its programming language, having a solid understanding of JavaScript is essential for Node.js development. The better you understand JavaScript, the more effectively you can use Node.js to build powerful applications.
            </p>
            
            <p>
              JavaScript was originally designed as a scripting language for web browsers, but with Node.js, it has become a versatile language for backend development as well. This allows developers to use the same language for both client and server-side code, creating a more streamlined development process.
            </p>
            
            <InfoBox>
              <strong>JavaScript Evolution:</strong> JavaScript has evolved significantly over the years with the introduction of ECMAScript standards. Node.js supports modern JavaScript features, allowing you to use the latest syntax and capabilities in your applications.
            </InfoBox>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>JavaScript Fundamentals</SectionTitle>
          
          <Card icon={<FaLaptopCode />} title="Variables and Data Types">
            <p>
              JavaScript has several ways to declare variables and multiple data types that you'll work with regularly.
            </p>
            
            <h3>Variable Declarations</h3>
            
            <CodeBlock language="javascript">
{`// var (older way, function-scoped)
var name = 'John';

// let (block-scoped, can be reassigned)
let age = 30;
age = 31; // This is valid

// const (block-scoped, cannot be reassigned)
const PI = 3.14159;
// PI = 3.14; // This would cause an error`}
            </CodeBlock>
            
            <h3>Primitive Data Types</h3>
            
            <CodeBlock language="javascript">
{`// String
const greeting = 'Hello, world!';

// Number
const age = 30;
const price = 19.99;

// Boolean
const isActive = true;

// Undefined
let variable;
console.log(variable); // undefined

// Null
const empty = null;

// Symbol (ES6)
const uniqueKey = Symbol('description');`}
            </CodeBlock>
            
            <h3>Complex Data Types</h3>
            
            <CodeBlock language="javascript">
{`// Object
const person = {
  name: 'John',
  age: 30,
  isActive: true,
  greet: function() {
    return \`Hello, my name is \${this.name}\`;
  }
};

// Array
const colors = ['red', 'green', 'blue'];
const mixed = [1, 'two', true, { key: 'value' }];

// Function (functions are first-class objects in JavaScript)
function add(a, b) {
  return a + b;
}

// Arrow function (ES6)
const multiply = (a, b) => a * b;`}
            </CodeBlock>
          </Card>
          
          <Card icon={<FaObjectGroup />} title="Working with Objects">
            <p>
              Objects are a fundamental data structure in JavaScript and are extensively used in Node.js applications.
            </p>
            
            <h3>Creating and Accessing Objects</h3>
            
            <CodeBlock language="javascript">
{`// Object literal
const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA'
  }
};

// Accessing properties
console.log(user.firstName); // John
console.log(user['lastName']); // Doe
console.log(user.address.city); // Boston

// Adding properties
user.phone = '555-1234';

// Deleting properties
delete user.age;`}
            </CodeBlock>
            
            <h3>Object Methods</h3>
            
            <CodeBlock language="javascript">
{`const user = {
  firstName: 'John',
  lastName: 'Doe',
  // Method definition
  getFullName: function() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  // Shorthand method (ES6)
  greet() {
    return \`Hello, \${this.getFullName()}\`;
  }
};

console.log(user.getFullName()); // John Doe
console.log(user.greet()); // Hello, John Doe`}
            </CodeBlock>
            
            <h3>Object Destructuring</h3>
            
            <CodeBlock language="javascript">
{`const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com'
};

// Extract properties into variables
const { firstName, lastName, email } = user;

console.log(firstName); // John
console.log(lastName); // Doe

// Rename during destructuring
const { firstName: first, lastName: last } = user;
console.log(first); // John

// Default values
const { age = 30 } = user;
console.log(age); // 30 (default value since it doesn't exist in user)`}
            </CodeBlock>
          </Card>
          
          <Card icon={<FaProjectDiagram />} title="Functions and Scope">
            <p>
              Functions are a core building block in JavaScript, and understanding how they work is crucial for Node.js development.
            </p>
            
            <h3>Function Declarations vs. Expressions</h3>
            
            <CodeBlock language="javascript">
{`// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const subtract = function(a, b) {
  return a - b;
};

// Arrow Function (ES6)
const multiply = (a, b) => a * b;

// Arrow Function with block body
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};`}
            </CodeBlock>
            
            <h3>Scope in JavaScript</h3>
            
            <CodeBlock language="javascript">
{`// Global scope
const globalVar = 'I am global';

function exampleFunction() {
  // Function scope
  const functionVar = 'I am function-scoped';
  
  if (true) {
    // Block scope (with let/const)
    let blockVar = 'I am block-scoped';
    var notBlockVar = 'I am not block-scoped with var';
    
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible
    console.log(blockVar); // Accessible
  }
  
  console.log(globalVar); // Accessible
  console.log(functionVar); // Accessible
  // console.log(blockVar); // Error: blockVar is not defined
  console.log(notBlockVar); // Accessible (var is not block-scoped)
}

console.log(globalVar); // Accessible
// console.log(functionVar); // Error: functionVar is not defined`}
            </CodeBlock>
            
            <h3>Closures</h3>
            
            <CodeBlock language="javascript">
{`function createCounter() {
  let count = 0; // Private variable
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

// The count variable is not directly accessible
// console.log(counter.count); // undefined`}
            </CodeBlock>
            
            <InfoBox>
              <strong>Why Closures Matter:</strong> Closures are extensively used in Node.js for creating private variables, managing callbacks, and implementing module patterns. They allow functions to maintain access to variables from their parent scope even after the parent function has finished executing.
            </InfoBox>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Asynchronous JavaScript</SectionTitle>
          
          <Card icon={<FaClock />} title="Understanding Asynchronous Code">
            <p>
              Asynchronous programming is a fundamental concept in Node.js. JavaScript provides several ways to handle asynchronous operations.
            </p>
            
            <h3>Callbacks</h3>
            
            <CodeBlock language="javascript">
{`// Traditional callback pattern
function fetchData(callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = { id: 1, name: 'Example Data' };
    callback(null, data); // null for error (node.js convention)
  }, 1000);
}

fetchData((error, data) => {
  if (error) {
    console.error('An error occurred:', error);
    return;
  }
  console.log('Data received:', data);
});

console.log('This runs before the data is received');`}
            </CodeBlock>
            
            <h3>Promises</h3>
            
            <CodeBlock language="javascript">
{`// Creating a promise
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const success = true;
      
      if (success) {
        const data = { id: 1, name: 'Example Data' };
        resolve(data);
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
}

// Using a promise
fetchDataPromise()
  .then(data => {
    console.log('Data received:', data);
    return data.id; // Return value for the next then
  })
  .then(id => {
    console.log('Data ID:', id);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  })
  .finally(() => {
    console.log('Operation completed');
  });

console.log('This runs before the promise resolves');`}
            </CodeBlock>
            
            <h3>Async/Await (ES8)</h3>
            
            <CodeBlock language="javascript">
{`// Using async/await with promises
async function fetchAndProcessData() {
  try {
    console.log('Fetching data...');
    const data = await fetchDataPromise();
    console.log('Data received:', data);
    
    // You can await multiple promises
    const result1 = await processData(data);
    const result2 = await saveData(result1);
    
    return result2;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error; // Re-throw or handle as needed
  } finally {
    console.log('Operation completed');
  }
}

// Helper functions (returning promises)
function processData(data) {
  return Promise.resolve({ ...data, processed: true });
}

function saveData(data) {
  return Promise.resolve({ ...data, saved: true });
}

// Execute the async function
fetchAndProcessData()
  .then(result => console.log('Final result:', result))
  .catch(error => console.error('Error in main flow:', error));

console.log('This runs before the async function completes');`}
            </CodeBlock>
            
            <InfoBox>
              <strong>Async/Await vs. Promises vs. Callbacks:</strong> While callbacks are the traditional way to handle asynchronous code in JavaScript, Promises and especially async/await provide a more readable and maintainable approach. Node.js supports all three patterns, but modern Node.js code typically uses async/await for better readability.
            </InfoBox>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Modern JavaScript Features</SectionTitle>
          
          <Card icon={<FaExchangeAlt />} title="ES6+ Features Used in Node.js">
            <p>
              Modern Node.js leverages many features from ES6 (ECMAScript 2015) and later. Here are some key features you'll use frequently:
            </p>
            
            <h3>Template Literals</h3>
            
            <CodeBlock language="javascript">
{`const name = 'John';
const greeting = \`Hello, \${name}!\`; // Interpolation

const multiline = \`
  This is a
  multi-line
  string
\`;`}
            </CodeBlock>
            
            <h3>Destructuring</h3>
            
            <CodeBlock language="javascript">
{`// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Object destructuring (already covered in Objects section)`}
            </CodeBlock>
            
            <h3>Spread and Rest Operators</h3>
            
            <CodeBlock language="javascript">
{`// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Spread operator with objects
const person = { name: 'John', age: 30 };
const employee = { ...person, jobTitle: 'Developer', age: 31 };
// { name: 'John', age: 31, jobTitle: 'Developer' }

// Rest operator in function parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15`}
            </CodeBlock>
            
            <h3>Default Parameters</h3>
            
            <CodeBlock language="javascript">
{`function greet(name = 'Guest', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}

console.log(greet()); // Hello, Guest!
console.log(greet('John')); // Hello, John!
console.log(greet('Jane', 'Hi')); // Hi, Jane!`}
            </CodeBlock>
            
            <h3>Classes</h3>
            
            <CodeBlock language="javascript">
{`// ES6 Class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Method
  getFullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
  
  // Static method
  static createAnonymous() {
    return new Person('John', 'Doe');
  }
}

// Inheritance
class Employee extends Person {
  constructor(firstName, lastName, jobTitle) {
    super(firstName, lastName); // Call parent constructor
    this.jobTitle = jobTitle;
  }
  
  getDescription() {
    return \`\${this.getFullName()} works as a \${this.jobTitle}\`;
  }
}

const employee = new Employee('Jane', 'Smith', 'Developer');
console.log(employee.getFullName()); // Jane Smith
console.log(employee.getDescription()); // Jane Smith works as a Developer`}
            </CodeBlock>
            
            <h3>Modules (ES Modules vs. CommonJS)</h3>
            
            <p>
              Node.js traditionally uses CommonJS modules, but now also supports ES Modules.
            </p>
            
            <CodeBlock language="javascript" fileName="math.js (CommonJS)">
{`// Exporting in CommonJS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract
};

// Or export individual functions
// module.exports.add = add;
// module.exports.subtract = subtract;`}
            </CodeBlock>
            
            <CodeBlock language="javascript" fileName="app.js (CommonJS)">
{`// Importing in CommonJS
const math = require('./math');
console.log(math.add(5, 3)); // 8

// Or with destructuring
const { add, subtract } = require('./math');
console.log(subtract(10, 4)); // 6`}
            </CodeBlock>
            
            <CodeBlock language="javascript" fileName="math.js (ES Modules)">
{`// Exporting in ES Modules
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Or default export
// export default { add, subtract };`}
            </CodeBlock>
            
            <CodeBlock language="javascript" fileName="app.js (ES Modules)">
{`// Importing in ES Modules
import { add, subtract } from './math.js';
console.log(add(5, 3)); // 8

// Or import all
// import * as math from './math.js';
// console.log(math.subtract(10, 4)); // 6`}
            </CodeBlock>
            
            <InfoBox>
              <strong>Using ES Modules in Node.js:</strong> To use ES Modules in Node.js, either use the .mjs file extension or set "type": "module" in your package.json. Node.js has been gradually improving its ES Modules support, making it easier to use modern JavaScript module syntax.
            </InfoBox>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Node.js-Specific JavaScript Patterns</SectionTitle>
          
          <Card>
            <p>
              There are certain JavaScript patterns that are especially common in Node.js development. Understanding these will help you write more effective Node.js applications.
            </p>
            
            <h3>Error-First Callbacks</h3>
            
            <CodeBlock language="javascript">
{`// The error-first callback pattern is a convention in Node.js
function readFile(path, callback) {
  // Simulating file reading
  setTimeout(() => {
    const randomSuccess = Math.random() > 0.2;
    
    if (randomSuccess) {
      const data = 'File content here';
      callback(null, data); // null for no error
    } else {
      callback(new Error('Failed to read file')); // Error as first argument
    }
  }, 1000);
}

// Using the error-first callback
readFile('/path/to/file.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  console.log('File content:', data);
});`}
            </CodeBlock>
            
            <h3>The Module Pattern</h3>
            
            <CodeBlock language="javascript" fileName="logger.js">
{`// Creating a module with private and public members
const logger = (() => {
  // Private variables and functions
  const logLevels = {
    INFO: 'INFO',
    WARNING: 'WARNING',
    ERROR: 'ERROR'
  };
  
  const formatMessage = (level, message) => {
    const timestamp = new Date().toISOString();
    return \`[\${timestamp}] [\${level}] \${message}\`;
  };
  
  // Public API
  return {
    info: (message) => {
      console.log(formatMessage(logLevels.INFO, message));
    },
    
    warn: (message) => {
      console.log(formatMessage(logLevels.WARNING, message));
    },
    
    error: (message) => {
      console.error(formatMessage(logLevels.ERROR, message));
    }
  };
})();

module.exports = logger;`}
            </CodeBlock>
            
            <CodeBlock language="javascript" fileName="app.js">
{`const logger = require('./logger');

logger.info('Application started');
logger.warn('Configuration file not found, using defaults');
logger.error('Could not connect to database');`}
            </CodeBlock>
            
            <h3>Event Emitters</h3>
            
            <p>
              The EventEmitter is a core pattern in Node.js for implementing the observer pattern.
            </p>
            
            <CodeBlock language="javascript">
{`const EventEmitter = require('events');

// Create a custom emitter
class JobProcessor extends EventEmitter {
  constructor() {
    super();
    this.queue = [];
  }
  
  addJob(job) {
    this.queue.push(job);
    this.emit('jobAdded', job);
  }
  
  processJobs() {
    if (this.queue.length === 0) {
      this.emit('empty');
      return;
    }
    
    this.emit('processing');
    
    // Process each job
    this.queue.forEach(job => {
      // Simulate processing
      this.emit('jobStarted', job);
      
      // Simulate completion
      setTimeout(() => {
        this.emit('jobCompleted', job);
      }, 1000);
    });
    
    // Clear the queue
    this.queue = [];
  }
}

// Using the event emitter
const processor = new JobProcessor();

// Register event listeners
processor.on('jobAdded', (job) => {
  console.log(\`Job added: \${job.name}\`);
});

processor.on('processing', () => {
  console.log('Processing jobs...');
});

processor.on('jobStarted', (job) => {
  console.log(\`Started job: \${job.name}\`);
});

processor.on('jobCompleted', (job) => {
  console.log(\`Completed job: \${job.name}\`);
});

processor.on('empty', () => {
  console.log('No jobs to process');
});

// Add some jobs
processor.addJob({ name: 'Send emails', priority: 'high' });
processor.addJob({ name: 'Generate report', priority: 'medium' });

// Process the jobs
processor.processJobs();`}
            </CodeBlock>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>JavaScript Best Practices for Node.js</SectionTitle>
          
          <Card>
            <p>
              Following JavaScript best practices is essential for writing maintainable, efficient, and bug-free Node.js applications.
            </p>
            
            <h3>Error Handling</h3>
            
            <CodeBlock language="javascript">
{`// Try-catch for synchronous code
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error('An error occurred:', error);
}

// Error handling with promises
fetchData()
  .then(data => processData(data))
  .catch(error => {
    console.error('Error in data processing:', error);
    // Handle the error appropriately
  });

// Error handling with async/await
async function processUserData() {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    return { user, posts };
  } catch (error) {
    console.error('Error processing user data:', error);
    // Handle specific error types
    if (error.code === 'USER_NOT_FOUND') {
      return { error: 'User not found' };
    }
    throw error; // Re-throw for upstream handling
  }
}`}
            </CodeBlock>
            
            <h3>Avoid Callback Hell</h3>
            
            <CodeBlock language="javascript">
{`// Callback hell - avoid this
getUser(userId, (userErr, user) => {
  if (userErr) {
    console.error(userErr);
    return;
  }
  
  getPosts(user.id, (postsErr, posts) => {
    if (postsErr) {
      console.error(postsErr);
      return;
    }
    
    getComments(posts[0].id, (commentsErr, comments) => {
      if (commentsErr) {
        console.error(commentsErr);
        return;
      }
      
      // Deep nested code is hard to read and maintain
      console.log(user, posts, comments);
    });
  });
});

// Better with Promises
getUser(userId)
  .then(user => {
    return getPosts(user.id).then(posts => {
      return getComments(posts[0].id).then(comments => {
        return { user, posts, comments };
      });
    });
  })
  .then(result => {
    console.log(result.user, result.posts, result.comments);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });

// Best with async/await
async function getUserData(userId) {
  try {
    const user = await getUser(userId);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    
    console.log(user, posts, comments);
    return { user, posts, comments };
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}`}
            </CodeBlock>
            
            <h3>Use const and let, Avoid var</h3>
            
            <CodeBlock language="javascript">
{`// Good practice
const PI = 3.14159; // Constant value that won't change
let counter = 0; // Variable that will be reassigned

function increment() {
  // Block-scoped variable
  let newValue = counter + 1;
  counter = newValue;
  return counter;
}

// Avoid 'var' due to function scoping and hoisting issues
// var x = 10; // Not recommended`}
            </CodeBlock>
            
            <h3>Code Organization</h3>
            
            <p>
              Organize your code into modular, single-responsibility components that are easy to test and maintain.
            </p>
            
            <CodeBlock language="javascript">
{`// Each module should have a clear, focused purpose
// userService.js - Handles user-related operations
const userService = {
  async getUser(id) {
    // Implementation
  },
  
  async updateUser(id, data) {
    // Implementation
  }
};

// postService.js - Handles post-related operations
const postService = {
  async getPosts(userId) {
    // Implementation
  },
  
  async createPost(userId, content) {
    // Implementation
  }
};

module.exports = userService;`}
            </CodeBlock>
            
            <InfoBox>
              <strong>Linting Tools:</strong> Consider using ESLint with a standardized configuration to enforce code style and catch potential issues early. Many Node.js projects use ESLint with the Airbnb style guide or Standard JS.
            </InfoBox>
          </Card>
        </Section>
      </div>
    </>
  );
};

export default JavaScriptBasics;