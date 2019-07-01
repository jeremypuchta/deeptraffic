import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const chartData = [
  { time: 1553810400, cars: 4, trucks: 0, busses: 1, motorcycles: 0 },
  { time: 1553814000, cars: 2, trucks: 0, busses: 0, motorcycles: 0 },
  { time: 1553817600, cars: 3, trucks: 2, busses: 0, motorcycles: 1 },
  { time: 1553821200, cars: 4, trucks: 0, busses: 1, motorcycles: 0 },
  { time: 1553824800, cars: 1, trucks: 1, busses: 0, motorcycles: 1 }
];

class TimeSeriesChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        datasets: [
          {
            label: 'Cars',
            data: [
              {
                x: new Date(1553810400),
                y: 4
              },
              {
                x: new Date(1553814000),
                y: 2
              },
              {
                x: new Date(1553817600),
                y: 3
              },
              {
                x: new Date(1553821200),
                y: 4
              },
              {
                x: new Date(1553824800),
                y: 1
              }
            ],
            fill: false,
            borderColor: 'red'
          },
          {
            label: 'Trucks',
            data: [
              {
                x: new Date(1553810400),
                y: 0
              },
              {
                x: new Date(1553814000),
                y: 0
              },
              {
                x: new Date(1553817600),
                y: 2
              },
              {
                x: new Date(1553821200),
                y: 0
              },
              {
                x: new Date(1553824800),
                y: 1
              }
            ],
            fill: false,
            borderColor: 'blue'
          },
          {
            label: 'Busses',
            data: [
              {
                x: new Date(1553810400),
                y: 1
              },
              {
                x: new Date(1553814000),
                y: 0
              },
              {
                x: new Date(1553817600),
                y: 0
              },
              {
                x: new Date(1553821200),
                y: 1
              },
              {
                x: new Date(1553824800),
                y: 0
              }
            ],
            fill: false,
            borderColor: 'green'
          },
          {
            label: 'Motorcycles',
            data: [
              {
                x: new Date(1553810400),
                y: 0
              },
              {
                x: new Date(1553814000),
                y: 0
              },
              {
                x: new Date(1553817600),
                y: 1
              },
              {
                x: new Date(1553821200),
                y: 0
              },
              {
                x: new Date(1553824800),
                y: 1
              }
            ],
            fill: false,
            borderColor: 'yellow'
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'hour'
              }
            }
          ]
        }
      }
    };
  }

  render() {
    return (
      <div>
        <Line data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default TimeSeriesChart;
