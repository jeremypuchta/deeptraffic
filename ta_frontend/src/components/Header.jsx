import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5rem;
  margin-bottom: 1rem;
`;

const StyledTitle = styled.h1`
  margin-bottom: 0.2rem;
`;

const StyledSubtitle = styled.h2`
  color: #999;
  margin-top: 0;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <StyledTitle>DeepTraffic</StyledTitle>
        </Link>
        <StyledSubtitle>Analyzing Traffic with Deep Learning</StyledSubtitle>
      </div>
    </StyledHeader>
  );
};

export default Header;
