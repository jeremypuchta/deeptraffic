import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  margin: 4rem 4rem 0 0;
`;

const StyledListItem = styled.li`
  font-size: 14pt;
  font-weight: 700;
`;

const StyledNavItem = styled.a``;

const Nav = () => {
  return (
    <StyledList>
      <StyledListItem>
        <StyledNavItem href="#">About</StyledNavItem>
      </StyledListItem>
    </StyledList>
  );
};

export default Nav;
