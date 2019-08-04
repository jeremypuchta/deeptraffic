import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  padding: 1rem 0;
  margin-top: 2rem;
  justify-content: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const StyledLegal = styled.p`
  font-weight: 700;
  font-size: 14pt;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLegal>© 2019 Ali Al-Ali & Jeremy Puchta</StyledLegal>
    </StyledFooter>
  );
};

export default Footer;
