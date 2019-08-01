import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';

const ChartsContainer = styled.div`
  max-width: 1280px;
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
          enabled: true,
          allButtonsEnabled: true,
          buttonTheme: {
            width: 90,
            states: {
              select: {
                fill: '#ddd'
              }
            }
          },
          buttons: [
            { type: 'hour',
              count: 1,
              text: 'Hour',
            },
            {
              type: 'day',
              count: 1,
              text: 'Day',
            },
            {
              type: 'month',
              count: 1,
              text: 'Month',
            },
            {
              type: 'year',
              count: 1,
              text: 'Year',
            },
            {
              type: 'all',
              text: 'Max',
            }
          ]
        },
        time: {
          useUTC: false
        },
        selected: 1
      }
    };
  }

  componentDidMount() {
    this.visualizeData()
  }

  visualizeData = () => {
    fetch('http://localhost:5000/data')
      .then(response => response.json())
      .then(this.processResults)
      .then(this.updateSeries);
  };

  processResults(data) {
    const results = [];
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

    results.push([carsArray, bussesArray, trucksArray, motorcyclesArray]);
    return results;
  }

  updateSeries = results => {
    this.setState({
      options: {
        series: [
          { name: 'cars', data: results[0][0] },
          { name: 'busses', data: results[0][1] },
          { name: 'trucks', data: results[0][2] },
          { name: 'motorcycles', data: results[0][3] }
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
