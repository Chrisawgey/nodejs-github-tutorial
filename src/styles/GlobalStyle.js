import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    line-height: 1.6;
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.background};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transitions.default};
  }

  a:hover {
    color: ${props => props.theme.colors.secondary};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${props => props.theme.spacing.medium};
    line-height: 1.2;
  }

  h1 {
    font-size: 3rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 2.2rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1.8rem;
    }
  }

  h3 {
    font-size: 1.8rem;
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: 1.5rem;
    }
  }

  p, ul, ol {
    margin-bottom: ${props => props.theme.spacing.medium};
  }

  ul, ol {
    margin-left: ${props => props.theme.spacing.large};
  }

  code {
    
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: ${props => props.theme.fonts.code};
    color: ${props => props.theme.colors.accent};
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.medium};
  }

  section {
    padding: ${props => props.theme.spacing.xlarge} 0;
  }
`;

export default GlobalStyle;