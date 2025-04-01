import React from 'react';
import styled from 'styled-components';
import { 
  FaGithub, 
  FaCodeBranch, 
  FaCode, 
  FaUsers,
  FaHistory,
  FaPlusSquare,
  FaDownload,
  FaExchangeAlt,
  FaNodeJs,
  FaBook
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

const GitHubIntro = () => {
  const setupSteps = [
    {
      title: "Create a GitHub Account",
      content: (
        <>
          <p>Go to <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a> and sign up for a free account. Choose a username that is professional and easily recognizable.</p>
        </>
      )
    },
    {
      title: "Install Git on Your Computer",
      content: (
        <>
          <p>Download and install Git from <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">git-scm.com/downloads</a>. Follow the installation instructions for your operating system.</p>
          <p>After installation, verify Git is installed by opening your terminal or command prompt and running:</p>
          <CodeBlock language="bash">
{`git --version`}
          </CodeBlock>
        </>
      )
    },
    {
      title: "Configure Git",
      content: (
        <>
          <p>Set up your identity in Git with your name and email address:</p>
          <CodeBlock language="bash">
{`git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`}
          </CodeBlock>
          <p>This information will be associated with your commits.</p>
        </>
      )
    },
    {
      title: "Set Up SSH Keys (Optional but Recommended)",
      content: (
        <>
          <p>SSH keys allow secure communication between your computer and GitHub. To generate an SSH key pair:</p>
          <CodeBlock language="bash">
{`ssh-keygen -t ed25519 -C "your.email@example.com"`}
          </CodeBlock>
          <p>Follow the prompts, then add the public key to your GitHub account under Settings &gt; SSH and GPG keys.</p>
        </>
      )
    }
  ];

  const gitBasicsSteps = [
    {
      title: "Initialize a Repository",
      content: (
        <>
          <p>To create a new Git repository in your project folder:</p>
          <CodeBlock language="bash">
{`# Navigate to your project directory
cd your-project-directory

# Initialize a new Git repository
git init`}
          </CodeBlock>
        </>
      )
    },
    {
      title: "Add Files to Staging Area",
      content: (
        <>
          <p>To begin tracking files and prepare them for a commit:</p>
          <CodeBlock language="bash">
{`# Add a specific file
git add filename.js

# Add multiple files
git add file1.js file2.js

# Add all files in the current directory
git add .`}
          </CodeBlock>
        </>
      )
    },
    {
      title: "Commit Changes",
      content: (
        <>
          <p>Commit your staged changes with a descriptive message:</p>
          <CodeBlock language="bash">
{`git commit -m "Add user authentication feature"`}
          </CodeBlock>
          <p>Write clear, concise commit messages that explain what changes were made and why.</p>
        </>
      )
    },
    {
      title: "Check Repository Status",
      content: (
        <>
          <p>Check the status of your repository to see modified files, staged changes, and more:</p>
          <CodeBlock language="bash">
{`git status`}
          </CodeBlock>
        </>
      )
    },
    {
      title: "View Commit History",
      content: (
        <>
          <p>View the commit history of your repository:</p>
          <CodeBlock language="bash">
{`# Simple log
git log

# Compact log format
git log --oneline

# Graph visualization
git log --graph --oneline --all`}
          </CodeBlock>
        </>
      )
    }
  ];

  const branchingSteps = [
    {
      title: "Create a New Branch",
      content: (
        <>
          <p>Create and switch to a new branch in one command:</p>
          <CodeBlock language="bash">
{`git checkout -b feature/user-login`}
          </CodeBlock>
          <p>Or with newer versions of Git:</p>
          <CodeBlock language="bash">
{`git switch -c feature/user-login`}
          </CodeBlock>
        </>
      )
    },
    {
      title: "Switch Between Branches",
      content: (
        <>
          <p>Move between existing branches:</p>
          <CodeBlock language="bash">
{`# Traditional way
git checkout main

# Modern way (Git 2.23+)
git switch main`}
          </CodeBlock>
        </>
      )
    },
    {
      title: "List Branches",
      content: (
        <>
          <p>View all branches in your repository:</p>
          <CodeBlock language="bash">
{`# List local branches
git branch

# List all branches (including remote)
git branch -a`}
          </CodeBlock>
        </>
      )
    },
    {
      title: "Merge Branches",
      content: (
        <>
          <p>Combine changes from one branch into another:</p>
          <CodeBlock language="bash">
{`# First switch to the target branch
git checkout main

# Merge changes from another branch
git merge feature/user-login`}
          </CodeBlock>
        </>
      )
    },
    {
      title: "Handle Merge Conflicts",
      content: (
        <>
          <p>If Git can't automatically merge changes, you'll need to resolve conflicts manually:</p>
          <ol>
            <li>Git will mark the files with conflicts</li>
            <li>Open these files and look for the conflict markers (<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>)</li>
            <li>Edit the files to resolve the conflicts</li>
            <li>Add the resolved files with <code>git add</code></li>
            <li>Complete the merge with <code>git commit</code></li>
          </ol>
        </>
      )
    },
    {
      title: "Delete a Branch",
      content: (
        <>
          <p>After merging, you can delete the feature branch:</p>
          <CodeBlock language="bash">
{`# Delete a branch
git branch -d feature/user-login

# Force delete an unmerged branch
git branch -D feature/user-login`}
          </CodeBlock>
        </>
      )
    }
  ];

  return (
    <>
      <PageHeader>
        <div className="container">
          <HeaderContent>
            <PageTitle>Introduction to GitHub</PageTitle>
            <PageDescription>
              Learn version control and collaboration with GitHub to supercharge your development workflow
            </PageDescription>
          </HeaderContent>
        </div>
      </PageHeader>
      
      <div className="container">
        <Section>
          <Card icon={<FaGithub />} title="What is GitHub?">
            <p>
              GitHub is a web-based platform that provides hosting for software development and version control using Git. It offers all the distributed version control and source code management functionality of Git, plus its own features like access control, bug tracking, feature requests, task management, and wikis for every project.
            </p>
            
            <p>
              Founded in 2008, GitHub has become the world's largest code hosting platform with millions of developers and companies using it to collaborate on projects. In 2018, Microsoft acquired GitHub, but it continues to operate independently.
            </p>
            
            <InfoBox>
              <strong>Git vs. GitHub:</strong> It's important to understand the difference between Git and GitHub. Git is a distributed version control system that tracks changes in your code, while GitHub is a cloud-based hosting service that lets you manage Git repositories. You can use Git without GitHub, but GitHub requires Git.
            </InfoBox>
            
            <p>
              GitHub has played a crucial role in the growth of open-source software by providing a platform where developers from around the world can collaborate on projects. It's also widely used by companies for private development and team collaboration.
            </p>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Why Use GitHub?</SectionTitle>
          
          <p>
            GitHub offers numerous benefits for both individual developers and teams. Here are some key advantages of using GitHub in your development workflow:
          </p>
          
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>
                <FaCodeBranch />
              </FeatureIcon>
              <FeatureTitle>Version Control</FeatureTitle>
              <p>
                Track changes to your code over time, revert to previous versions when needed, and keep a complete history of your project.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaUsers />
              </FeatureIcon>
              <FeatureTitle>Collaboration</FeatureTitle>
              <p>
                Work with other developers on the same project without stepping on each other's toes. Review code, suggest changes, and discuss improvements.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaCode />
              </FeatureIcon>
              <FeatureTitle>Code Hosting</FeatureTitle>
              <p>
                Store your code in the cloud with reliable backup and access it from anywhere. Share your work with others or keep it private.
              </p>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FaHistory />
              </FeatureIcon>
              <FeatureTitle>Project Management</FeatureTitle>
              <p>
                Use GitHub Issues and Projects to track bugs, plan features, and organize your development process with kanban-style boards.
              </p>
            </FeatureCard>
          </FeatureGrid>
        </Section>
        
        <Section id="version-control">
          <SectionTitle>Understanding Version Control</SectionTitle>
          
          <Card>
            <p>
              Version control is a system that records changes to files over time so that you can recall specific versions later. It's essential for tracking progress, managing different branches of development, and collaborating with others.
            </p>
            
            <h3>Key Version Control Concepts</h3>
            
            <ul>
              <li>
                <strong>Repository (Repo):</strong> A collection of files and their complete history of changes.
              </li>
              <li>
                <strong>Commit:</strong> A snapshot of your repository at a specific point in time.
              </li>
              <li>
                <strong>Branch:</strong> A separate line of development that allows you to work on features or fixes without affecting the main codebase.
              </li>
              <li>
                <strong>Merge:</strong> The process of combining changes from different branches.
              </li>
              <li>
                <strong>Pull Request:</strong> A way to propose changes to a repository and request that someone review and merge them.
              </li>
              <li>
                <strong>Clone:</strong> Creating a local copy of a remote repository.
              </li>
              <li>
                <strong>Fork:</strong> Creating your own copy of someone else's repository on GitHub.
              </li>
            </ul>
            
            <h3>Types of Version Control Systems</h3>
            
            <ul>
              <li>
                <strong>Centralized Version Control Systems (CVCS):</strong> Use a central server to store all file versions (e.g., Subversion).
              </li>
              <li>
                <strong>Distributed Version Control Systems (DVCS):</strong> Each user has a complete copy of the repository, including its history (e.g., Git).
              </li>
            </ul>
            
            <p>
              Git is a distributed version control system, which means that every developer's working copy of the code is also a repository that can contain the full history of all changes.
            </p>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Getting Started with GitHub</SectionTitle>
          
          <Card icon={<FaPlusSquare />} title="Setting Up Your GitHub Account and Git">
            <p>
              Before you can start using GitHub for your projects, you need to set up your account and configure Git on your local machine.
            </p>
            
            <StepsList steps={setupSteps} />
            
            <InfoBox>
              <strong>GitHub Desktop:</strong> If you prefer a graphical user interface instead of command-line Git, consider using <a href="https://desktop.github.com/" target="_blank" rel="noopener noreferrer">GitHub Desktop</a>. It provides a user-friendly interface for common Git operations.
            </InfoBox>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Basic Git Commands</SectionTitle>
          
          <Card icon={<FaCode />} title="Essential Git Operations">
            <p>
              Git provides a rich set of commands to manage your repositories. Here are the most common commands you'll use in your day-to-day development.
            </p>
            
            <StepsList steps={gitBasicsSteps} />
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Working with GitHub Repositories</SectionTitle>
          
          <Card icon={<FaGithub />} title="GitHub Repository Operations">
            <h3>Creating a New Repository on GitHub</h3>
            
            <ol>
              <li>Log in to your GitHub account</li>
              <li>Click the "+" icon in the upper right corner and select "New repository"</li>
              <li>Enter a repository name and optional description</li>
              <li>Choose whether to make it public or private</li>
              <li>Optionally add a README, .gitignore, and license</li>
              <li>Click "Create repository"</li>
            </ol>
            
            <h3>Connecting a Local Repository to GitHub</h3>
            
            <p>After creating a repository on GitHub, connect your local repository:</p>
            
            <CodeBlock language="bash">
{`# For a new repository
git remote add origin https://github.com/username/repository.git

# Verify remote repository
git remote -v

# Push your changes to GitHub
git push -u origin main`}
            </CodeBlock>
            
            <h3>Cloning an Existing Repository</h3>
            
            <p>Download a copy of an existing GitHub repository:</p>
            
            <CodeBlock language="bash">
{`# Using HTTPS
git clone https://github.com/username/repository.git

# Using SSH (if you've set up SSH keys)
git clone git@github.com:username/repository.git`}
            </CodeBlock>
            
            <h3>Forking a Repository</h3>
            
            <p>
              Forking creates your own copy of someone else's repository on GitHub. This is commonly used for contributing to open-source projects.
            </p>
            
            <ol>
              <li>Navigate to the repository you want to fork</li>
              <li>Click the "Fork" button in the upper right corner</li>
              <li>Select your account as the destination</li>
            </ol>
            
            <p>After forking, you can clone your fork to your local machine, make changes, and create a pull request to suggest these changes to the original project.</p>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Branching and Merging</SectionTitle>
          
          <Card icon={<FaCodeBranch />} title="Working with Branches">
            <p>
              Branching is a powerful feature in Git that allows you to diverge from the main line of development and continue working without affecting that main line. This is especially useful for developing new features, fixing bugs, or experimenting with changes.
            </p>
            
            <h3>Git Branching Workflow</h3>
            
            <p>
              A common workflow is to maintain a <code>main</code> branch that always contains production-ready code, while development happens in feature branches that are merged back into <code>main</code> when complete.
            </p>
            
            <StepsList steps={branchingSteps} />
            
            <h3>Pull Requests</h3>
            
            <p>
              Pull requests are a GitHub feature that allows you to propose changes to a repository. They're especially useful for contributing to open-source projects or implementing code review in your team.
            </p>
            
            <p>To create a pull request:</p>
            
            <ol>
              <li>Push your branch to GitHub: <code>git push origin feature/user-login</code></li>
              <li>Go to the repository on GitHub</li>
              <li>Click the "Pull requests" tab and then "New pull request"</li>
              <li>Select your branch as the "compare" branch</li>
              <li>Review the changes and click "Create pull request"</li>
              <li>Add a title and description explaining your changes</li>
              <li>Submit the pull request</li>
            </ol>
            
            <InfoBox>
              <strong>GitFlow:</strong> For larger projects, consider using GitFlow, a branching model that defines specific branches for features, releases, and hotfixes. Learn more about <a href="https://nvie.com/posts/a-successful-git-branching-model/" target="_blank" rel="noopener noreferrer">GitFlow here</a>.
            </InfoBox>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Collaborating with Others</SectionTitle>
          
          <Card icon={<FaUsers />} title="Team Collaboration on GitHub">
            <p>
              GitHub provides several features to help teams collaborate effectively on projects. Here are some best practices for working with others:
            </p>
            
            <h3>Code Reviews</h3>
            
            <p>
              Code reviews are an essential part of the collaborative development process. They help catch bugs, maintain code quality, and share knowledge among team members.
            </p>
            
            <p>When reviewing code on GitHub:</p>
            
            <ul>
              <li>Look for logical errors and edge cases</li>
              <li>Verify that the code follows the project's style guidelines</li>
              <li>Check for test coverage</li>
              <li>Provide constructive feedback and suggestions</li>
              <li>Approve the pull request when you're satisfied with the changes</li>
            </ul>
            
            <h3>Issues and Project Boards</h3>
            
            <p>
              GitHub Issues are a great way to track bugs, enhancements, and tasks for your project. Combined with Project Boards, they provide a powerful project management system.
            </p>
            
            <p>To effectively use Issues:</p>
            
            <ul>
              <li>Use descriptive titles and detailed descriptions</li>
              <li>Add appropriate labels (bug, enhancement, documentation, etc.)</li>
              <li>Assign issues to team members responsible for them</li>
              <li>Reference issues in your commits and pull requests</li>
              <li>Close issues automatically with keywords in pull request descriptions (e.g., "Fixes #123")</li>
            </ul>
            
            <h3>GitHub Actions</h3>
            
            <p>
              GitHub Actions is an automation tool that allows you to build, test, and deploy your code directly from GitHub. You can create workflows that run when certain events occur in your repository.
            </p>
            
            <p>Common uses for GitHub Actions include:</p>
            
            <ul>
              <li>Running automated tests when code is pushed</li>
              <li>Building and deploying applications</li>
              <li>Publishing packages to npm or other registries</li>
              <li>Sending notifications</li>
              <li>Automating issue management</li>
            </ul>
            
            <CodeBlock language="yaml" fileName=".github/workflows/node.js.yml">
{`name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 16.x, 18.x]

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js \${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: \${{ matrix.node-version }}
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test`}
            </CodeBlock>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Advanced Git Techniques</SectionTitle>
          
          <Card icon={<FaExchangeAlt />} title="Power User Git Commands">
            <p>
              As you become more comfortable with Git, you can leverage more advanced features to improve your workflow.
            </p>
            
            <h3>Interactive Rebase</h3>
            
            <p>
              Interactive rebase allows you to modify your commit history by reordering, editing, squashing, or dropping commits.
            </p>
            
            <CodeBlock language="bash">
{`# Start an interactive rebase for the last 3 commits
git rebase -i HEAD~3`}
            </CodeBlock>
            
            <p>This opens an editor where you can choose what to do with each commit:</p>
            
            <ul>
              <li><code>pick</code>: Use the commit as is</li>
              <li><code>reword</code>: Change the commit message</li>
              <li><code>edit</code>: Pause to amend the commit</li>
              <li><code>squash</code>: Combine with the previous commit</li>
              <li><code>fixup</code>: Like squash, but discard the commit message</li>
              <li><code>drop</code>: Remove the commit</li>
            </ul>
            
            <h3>Stashing Changes</h3>
            
            <p>
              Stashing allows you to save uncommitted changes temporarily and switch to another branch or task.
            </p>
            
            <CodeBlock language="bash">
{`# Stash current changes
git stash

# List all stashes
git stash list

# Apply the most recent stash and keep it in the stash list
git stash apply

# Apply the most recent stash and remove it from the stash list
git stash pop

# Apply a specific stash
git stash apply stash@{2}

# Create a new branch from a stash
git stash branch new-branch stash@{0}`}
            </CodeBlock>
            
            <h3>Cherry-Picking</h3>
            
            <p>
              Cherry-picking allows you to apply specific commits from one branch to another.
            </p>
            
            <CodeBlock language="bash">
{`# Apply commit with hash abc123 to the current branch
git cherry-pick abc123

# Cherry-pick multiple commits
git cherry-pick abc123 def456

# Cherry-pick a range of commits
git cherry-pick abc123^..def456`}
            </CodeBlock>
            
            <h3>Git Hooks</h3>
            
            <p>
              Git hooks are scripts that Git executes before or after events like commit, push, and receive. They can be used to enforce coding standards, run tests, or trigger deployments.
            </p>
            
            <p>
              Common hooks include:
            </p>
            
            <ul>
              <li><code>pre-commit</code>: Run before a commit is created (e.g., to run linters)</li>
              <li><code>prepare-commit-msg</code>: Modify the default commit message</li>
              <li><code>post-commit</code>: Run after a commit is created</li>
              <li><code>pre-push</code>: Run before a push to a remote repository (e.g., to run tests)</li>
            </ul>
            
            <p>To create a Git hook, add an executable script to the <code>.git/hooks</code> directory with the appropriate name.</p>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>GitHub Best Practices</SectionTitle>
          
          <Card icon={<FaGithub />} title="Making the Most of GitHub">
            <p>
              Adopting these best practices will help you and your team use GitHub more effectively:
            </p>
            
            <h3>Documentation</h3>
            
            <ul>
              <li>Create a detailed README.md file that explains what your project does, how to install and use it, and how to contribute</li>
              <li>Add a LICENSE file to clarify how others can use your code</li>
              <li>Use GitHub Wiki for comprehensive documentation</li>
              <li>Create a CONTRIBUTING.md file to guide contributors</li>
            </ul>
            
            <h3>Repository Organization</h3>
            
            <ul>
              <li>Use descriptive repository names</li>
              <li>Keep repositories focused on a single project or component</li>
              <li>Use GitHub Topics to categorize repositories</li>
              <li>Pin important repositories to your profile or organization page</li>
            </ul>
            
            <h3>Commit Practices</h3>
            
            <ul>
              <li>Write clear, concise commit messages that explain why the change was made</li>
              <li>Make atomic commits that focus on a single change</li>
              <li>Commit early and often</li>
              <li>Follow a consistent commit message format (e.g., "feat: add user authentication")</li>
            </ul>
            
            <h3>Branching Strategy</h3>
            
            <ul>
              <li>Maintain a stable main branch</li>
              <li>Use feature branches for development</li>
              <li>Consider using a develop branch for integrating features before releasing</li>
              <li>Delete branches after merging</li>
              <li>Use descriptive branch names (e.g., "feature/user-authentication", "fix/login-bug")</li>
            </ul>
            
            <h3>Security</h3>
            
            <ul>
              <li>Never commit sensitive information (passwords, API keys, tokens) to your repository</li>
              <li>Use environment variables or secret management tools</li>
              <li>Enable two-factor authentication for your GitHub account</li>
              <li>Regularly review and update repository access permissions</li>
              <li>Keep dependencies updated to patch security vulnerabilities</li>
            </ul>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Integrating GitHub with Node.js Projects</SectionTitle>
          
          <Card icon={<FaNodeJs />} title="GitHub for Node.js Development">
            <p>
              GitHub and Node.js work together seamlessly. Here are some tips for using GitHub effectively with your Node.js projects:
            </p>
            
            <h3>Package.json and Dependencies</h3>
            
            <p>
              When working with Node.js projects on GitHub, properly managing your dependencies is crucial:
            </p>
            
            <ul>
              <li>Include a comprehensive package.json file with all dependencies</li>
              <li>Use semantic versioning in your dependencies</li>
              <li>Consider using package-lock.json or yarn.lock for dependency consistency</li>
              <li>Enable Dependabot to automatically update dependencies</li>
            </ul>
            
            <h3>.gitignore for Node.js</h3>
            
            <p>
              Create a proper .gitignore file to exclude unnecessary files from your repository:
            </p>
            
            <CodeBlock language="text" fileName=".gitignore">
{`# Dependencies
node_modules/
npm-debug.log
yarn-error.log
yarn-debug.log

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build files
dist/
build/
coverage/

# OS specific files
.DS_Store
Thumbs.db

# IDE specific files
.idea/
.vscode/
*.sublime-project
*.sublime-workspace`}
            </CodeBlock>
            
            <h3>GitHub Actions for Node.js</h3>
            
            <p>
              Set up GitHub Actions to automate your Node.js workflows:
            </p>
            
            <ul>
              <li>Automatically run tests on every push and pull request</li>
              <li>Deploy your application to staging or production environments</li>
              <li>Publish packages to npm</li>
              <li>Run linters to maintain code quality</li>
            </ul>
            
            <p>Example GitHub Actions workflow for a Node.js project:</p>
            
            <CodeBlock language="yaml" fileName=".github/workflows/node-ci.yml">
{`name: Node.js CI/CD

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    - name: Install dependencies
      run: npm ci
    - name: Run tests
      run: npm test
    - name: Run linting
      run: npm run lint

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    - name: Install dependencies
      run: npm ci
    - name: Build
      run: npm run build
    - name: Deploy
      # Add your deployment steps here`}
            </CodeBlock>
            
            <h3>Releasing Node.js Packages</h3>
            
            <p>
              GitHub can help you manage releases of your Node.js packages:
            </p>
            
            <ul>
              <li>Use GitHub Releases to create versioned releases of your software</li>
              <li>Link releases to specific Git tags</li>
              <li>Automate package publishing with GitHub Actions</li>
              <li>Generate release notes from pull requests and commits</li>
            </ul>
            
            <CodeBlock language="bash">
{`# Create a new tag
git tag v1.0.0

# Push the tag to GitHub
git push origin v1.0.0`}
            </CodeBlock>
            
            <p>
              Then create a release on GitHub based on this tag, including release notes, binary attachments, and version information.
            </p>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Contributing to Open Source</SectionTitle>
          
          <Card icon={<FaUsers />} title="Making Your First Contribution">
            <p>
              Contributing to open-source projects on GitHub is a great way to improve your skills, help the community, and build your portfolio. Here's how to get started:
            </p>
            
            <h3>Finding Projects to Contribute To</h3>
            
            <ul>
              <li>Look for projects with "good first issue" or "beginner-friendly" labels</li>
              <li>Explore GitHub Explore and GitHub Topics to find interesting projects</li>
              <li>Consider projects you already use and enjoy</li>
              <li>Check out <a href="https://firstcontributions.github.io/" target="_blank" rel="noopener noreferrer">First Contributions</a> for beginner-friendly options</li>
            </ul>
            
            <h3>The Contribution Process</h3>
            
            <ol>
              <li>Find an issue to work on (or create one if you've identified a bug or improvement)</li>
              <li>Comment on the issue to express your interest in working on it</li>
              <li>Fork the repository</li>
              <li>Clone your fork to your local machine</li>
              <li>Create a new branch for your contribution</li>
              <li>Make your changes and commit them</li>
              <li>Push your branch to your fork</li>
              <li>Create a pull request to the original repository</li>
              <li>Respond to feedback and make any requested changes</li>
              <li>Celebrate when your contribution is merged!</li>
            </ol>
            
            <h3>Pull Request Etiquette</h3>
            
            <ul>
              <li>Follow the project's contribution guidelines</li>
              <li>Keep pull requests focused on a single issue or feature</li>
              <li>Write a clear description of what your pull request does</li>
              <li>Include screenshots or GIFs if you made UI changes</li>
              <li>Link to any related issues</li>
              <li>Be patient and responsive to feedback</li>
            </ul>
            
            <InfoBox>
              <strong>Hacktoberfest:</strong> Consider participating in <a href="https://hacktoberfest.com/" target="_blank" rel="noopener noreferrer">Hacktoberfest</a>, an annual event in October that encourages open-source contributions. It's a great way to get started with open source and even earn some swag!
            </InfoBox>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>Troubleshooting Common Git Issues</SectionTitle>
          
          <Card icon={<FaCode />} title="Fixing Git Problems">
            <p>
              Even experienced developers encounter Git issues. Here are solutions to common problems:
            </p>
            
            <h3>Undoing Changes</h3>
            
            <CodeBlock language="bash">
{`# Discard changes in working directory
git checkout -- filename.js

# Unstage a file
git reset HEAD filename.js

# Undo the last commit but keep the changes
git reset --soft HEAD~1

# Completely discard the last commit and its changes
git reset --hard HEAD~1

# Revert a specific commit (creates a new commit that undoes changes)
git revert abc123`}
            </CodeBlock>
            
            <h3>Fixing Detached HEAD State</h3>
            
            <p>
              If you find yourself in a "detached HEAD" state:
            </p>
            
            <CodeBlock language="bash">
{`# Create a new branch at your current position
git checkout -b new-branch-name

# Or return to a branch
git checkout main`}
            </CodeBlock>
            
            <h3>Handling Merge Conflicts</h3>
            
            <p>
              When Git can't automatically merge changes:
            </p>
            
            <CodeBlock language="bash">
{`# Abort a merge with conflicts
git merge --abort

# After resolving conflicts manually
git add <resolved-files>
git commit -m "Resolve merge conflicts"`}
            </CodeBlock>
            
            <h3>Recovering Lost Commits</h3>
            
            <p>
              If you've lost commits due to a reset or other operation:
            </p>
            
            <CodeBlock language="bash">
{`# Show the reflog (reference log)
git reflog

# Recover by creating a new branch at the lost commit
git checkout -b recovery-branch abc123`}
            </CodeBlock>
            
            <h3>Fixing a Wrong Commit Message</h3>
            
            <CodeBlock language="bash">
{`# Amend the most recent commit message
git commit --amend -m "New commit message"

# For older commits, use interactive rebase
git rebase -i HEAD~3
# Then change "pick" to "reword" for the commit to modify`}
            </CodeBlock>
          </Card>
        </Section>
        
        <Section>
          <SectionTitle>GitHub Resources and Learning Path</SectionTitle>
          
          <Card icon={<FaBook />} title="Continue Your GitHub Journey">
            <p>
              As you become more comfortable with GitHub and Git, consider exploring these resources to deepen your knowledge:
            </p>
            
            <h3>Official Documentation</h3>
            
            <ul>
              <li><a href="https://docs.github.com/en" target="_blank" rel="noopener noreferrer">GitHub Docs</a></li>
              <li><a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">Git Documentation</a></li>
              <li><a href="https://lab.github.com/" target="_blank" rel="noopener noreferrer">GitHub Learning Lab</a></li>
            </ul>
            
            <h3>Interactive Learning</h3>
            
            <ul>
              <li><a href="https://learngitbranching.js.org/" target="_blank" rel="noopener noreferrer">Learn Git Branching</a> - An interactive visualization tool to learn Git</li>
              <li><a href="https://www.codecademy.com/learn/learn-git" target="_blank" rel="noopener noreferrer">Codecademy: Learn Git</a></li>
              <li><a href="https://github.github.com/training-kit/" target="_blank" rel="noopener noreferrer">GitHub Training Kit</a></li>
            </ul>
            
            <h3>Books</h3>
            
            <ul>
              <li>"Pro Git" by Scott Chacon and Ben Straub (available <a href="https://git-scm.com/book/en/v2" target="_blank" rel="noopener noreferrer">free online</a>)</li>
              <li>"GitHub Essentials" by Achilleas Pipinellis</li>
              <li>"Git for Teams" by Emma Jane Hogbin Westby</li>
            </ul>
            
            <h3>Cheat Sheets</h3>
            
            <ul>
              <li><a href="https://education.github.com/git-cheat-sheet-education.pdf" target="_blank" rel="noopener noreferrer">GitHub's Git Cheat Sheet</a></li>
              <li><a href="https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet" target="_blank" rel="noopener noreferrer">Atlassian's Git Cheat Sheet</a></li>
            </ul>
            
            <InfoBox>
              <strong>Next Steps:</strong> After mastering the basics of GitHub, consider learning about more advanced topics like GitHub Actions for CI/CD, GitHub Packages for package management, or GitHub Pages for hosting websites.
            </InfoBox>
          </Card>
        </Section>
      </div>
    </>
  );
};

export default GitHubIntro;