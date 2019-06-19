import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
`;

const StyledListItem = styled.li`
  
`;

const Nav = () => {
  return (
    <StyledList>
      <StyledListItem>About</StyledListItem>
    </StyledList>
  );
};

export default Nav;
