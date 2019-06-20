import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5rem;
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
        <StyledTitle>DeepTraffic</StyledTitle>
        <StyledSubtitle>Analyzing Traffic with Deep Learning</StyledSubtitle>
      </div>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
