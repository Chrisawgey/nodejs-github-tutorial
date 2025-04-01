import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.medium};
  padding: ${props => props.theme.spacing.large};
  margin-bottom: ${props => props.theme.spacing.large};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.hover};
  }
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

const CardIcon = styled.div`
  font-size: 2rem;
  margin-right: ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.primary};
`;

const Card = ({ icon, title, children }) => {
  return (
    <CardContainer>
      {(icon || title) && (
        <CardTitle>
          {icon && <CardIcon>{icon}</CardIcon>}
          {title && <h3>{title}</h3>}
        </CardTitle>
      )}
      {children}
    </CardContainer>
  );
};

export default Card;