import React from 'react';
import styled from 'styled-components';

const StepsContainer = styled.ol`
  counter-reset: step-counter;
  list-style-type: none;
  margin: ${props => props.theme.spacing.large} 0;
  padding-left: 0;
`;

const StepItem = styled.li`
  position: relative;
  padding-left: 3.5rem;
  margin-bottom: ${props => props.theme.spacing.large};
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    counter-increment: step-counter;
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    font-weight: bold;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StepTitle = styled.h4`
  margin-bottom: ${props => props.theme.spacing.small};
  color: ${props => props.theme.colors.dark};
`;

const StepsList = ({ steps }) => {
  return (
    <StepsContainer>
      {steps.map((step, index) => (
        <StepItem key={index}>
          {step.title && <StepTitle>{step.title}</StepTitle>}
          {typeof step === 'string' ? step : step.content}
        </StepItem>
      ))}
    </StepsContainer>
  );
};

export default StepsList;