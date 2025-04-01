import React from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlockContainer = styled.div`
  margin: ${props => props.theme.spacing.medium} 0;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
`;

const CodeHeader = styled.div`
  background: #1e1e1e;
  color: #d4d4d4;
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  font-family: ${props => props.theme.fonts.code};
  font-size: 0.9rem;
  border-top-left-radius: ${props => props.theme.borderRadius};
  border-top-right-radius: ${props => props.theme.borderRadius};
`;

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  margin: 0 !important;
  border-top-left-radius: ${props => props.fileName ? '0' : props.theme.borderRadius};
  border-top-right-radius: ${props => props.fileName ? '0' : props.theme.borderRadius};
  border-bottom-left-radius: ${props => props.theme.borderRadius};
  border-bottom-right-radius: ${props => props.theme.borderRadius};
`;

const CodeBlock = ({ language, fileName, children }) => {
  return (
    <CodeBlockContainer>
      {fileName && <CodeHeader>{fileName}</CodeHeader>}
      <StyledSyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        fileName={fileName}
        showLineNumbers
      >
        {children}
      </StyledSyntaxHighlighter>
    </CodeBlockContainer>
  );
};

export default CodeBlock;