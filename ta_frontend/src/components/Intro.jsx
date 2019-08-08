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

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getLatestUpdate();
  }

  getLatestUpdate() {
    let date;
    let time;
    fetch('http://localhost:5000/latest')
      .then(response => response.text())
      .then(function(unixtime) {
        const momentObject = moment.unix(unixtime);
        date = momentObject.format('MMM. D, YYYY');
        time = momentObject.format('HH:mm A');
      })
      .then(() => this.setState({ date, time }));
  }

  render() {
    return (
      <StyledIntroContainer>
        <StyledTimestamp>
          Updated { this.state.date } at { this.state.time }
        </StyledTimestamp>
        <StyledTitle>
          What is the traffic situation like on the Leipziger Ring?
        </StyledTitle>
        <StyledSubtitle>
          An updated calculation of the traffic situation around the Leipziger
          Ring based on data gathered from publicly available webcams.&nbsp;
          <StyledMethodologyLink to="/about">
            How this works »
          </StyledMethodologyLink>
        </StyledSubtitle>
      </StyledIntroContainer>
    );
  }
}

export default Intro;
