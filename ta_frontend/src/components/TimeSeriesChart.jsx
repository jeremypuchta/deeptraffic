import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

const ChartsContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

class TimeSeriesChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        xAxis: {
          type: 'datetime'
        },
        series: [
          { name: 'cars', data: [] },
          { name: 'busses', data: [] },
          { name: 'trucks', data: [] },
          { name: 'motorcycles', data: [] }
        ],
        rangeSelector: {
          buttons: [
            { type: 'hour', count: 1, text: '1h' },
            { type: 'day', count: 1, text: '1d' },
            { type: 'month', count: 1, text: '1m' },
            { type: 'year', count: 1, text: '1y' },
            { type: 'all', text: 'All' }
          ]
        },
        time: {
          useUTC: false
        }
      }
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/day')
      .then(response => response.json())
      .then(this.processResults)
      .then(this.updateSeries);
  }

  processResults(data) {
    const result = [];
    const carsArray = [];
    const bussesArray = [];
    const trucksArray = [];
    const motorcyclesArray = [];

    data.forEach(result => {
      carsArray.push([result.time * 1000, result.cars]);
      bussesArray.push([result.time * 1000, result.busses]);
      trucksArray.push([result.time * 1000, result.trucks]);
      motorcyclesArray.push([result.time * 1000, result.motorcycles]);
    });

    result.push([carsArray, bussesArray, trucksArray, motorcyclesArray]);
    return result;
  }

  updateSeries = result => {
    this.setState({
      options: {
        series: [
          { name: 'cars', data: result[0][0] },
          { name: 'busses', data: result[0][1] },
          { name: 'trucks', data: result[0][2] },
          { name: 'motorcycles', data: result[0][3] }
        ]
      }
    });
  };

  render() {
    const { options } = this.state;

    return (
      <ChartsContainer>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
        />
      </ChartsContainer>
    );
  }
}

export default TimeSeriesChart;
