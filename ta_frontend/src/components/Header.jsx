import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const StyledHeader = styled.header`
  
`;

const StyledTitle = styled.h1`
  font-family: monospace;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>DeepTraffic</StyledTitle>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
