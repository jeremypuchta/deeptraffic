import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

const StyledIntroContainer = styled.div`
  width: 1024px;
  text-align: center;
  margin: 0 auto 2rem;
  line-height: 1.4;
`;

const StyledTimestamp = styled.p`
  font-family: monospace;
  color: #999;
  text-transform: uppercase;
  margin: 0;
`;

const StyledTitle = styled.h1`
  margin: 0;
`;

const StyledSubtitle = styled.p`
  font-size: 16pt;
  margin: 0 5rem;
`;

const StyledMethodologyLink = styled(Link)`
  color: #008fd5;
`;

class Intro extends React.Component {
  render() {
    return (
      <StyledIntroContainer>
        <StyledTimestamp>Updated Jul. 1, 2019 at 11:04 AM</StyledTimestamp>
        <StyledTitle>
          What is the traffic situation like on the Leipziger Ring?
        </StyledTitle>
        <StyledSubtitle>
          An updated calculation of the traffic situation around the Leipziger
          Ring based on data gathered from publicly available webcams.&nbsp;
          <StyledMethodologyLink to="/about">How this works »</StyledMethodologyLink>
        </StyledSubtitle>
      </StyledIntroContainer>
    );
  }
}

export default Intro;
