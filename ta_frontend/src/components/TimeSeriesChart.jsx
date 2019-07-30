import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

const ChartsContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const options = {
  xAxis: {
    type: 'datetime'
  },
  series: [
    {
      name: 'cars',
      data: [[1564354800000, 4], [1564358400000, 1]]
    },
    {
      name: 'busses',
      data: [[1564354800000, 0], [1564358400000, 1]]
    },
    {
      name: 'trucks',
      data: [[1564354800000, 2], [1564358400000, 1]]
    },
    {
      name: 'motorcycles',
      data: [[1564354800000, 0], [1564358400000, 3]]
    }
  ]
};

const TimeSeriesChart = () => {
  return (
    <ChartsContainer>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </ChartsContainer>
  );
};

export default TimeSeriesChart;
