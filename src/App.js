import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Pages
import Home from './pages/Home';
import NodeJsIntro from './pages/NodeJsIntro';
import GettingStarted from './pages/GettingStarted';
import JavaScriptBasics from './pages/JavaScriptBasics';
import GitHubIntro from './pages/GitHubIntro';
import Resources from './pages/Resources';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Styles
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-is-nodejs" element={<NodeJsIntro />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/javascript-basics" element={<JavaScriptBasics />} />
          <Route path="/github-intro" element={<GitHubIntro />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;