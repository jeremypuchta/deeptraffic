import React from 'react';
import ReactTable from 'react-table';
import styled from 'styled-components';
import 'react-table/react-table.css';

class DataTable extends React.Component {
  render() {
    const data = [];

    const columns = [
      {
        Header: 'Absolute',
        columns: [
          {
            Header: 'Cars',
            accessor: 'cars'
          },
          {
            Header: 'Busses',
            accessor: 'busses'
          },
          {
            Header: 'Trucks',
            accessor: 'trucks'
          },
          {
            Header: 'Motorcycles',
            accessor: 'motorcycles'
          }
        ]
      },
      {
        Header: 'Minimum',
        columns: [
          {
            Header: 'Cars',
            accessor: 'cars'
          },
          {
            Header: 'Busses',
            accessor: 'busses'
          },
          {
            Header: 'Trucks',
            accessor: 'trucks'
          },
          {
            Header: 'Motorcycles',
            accessor: 'motorcycles'
          }
        ]
      },
      {
        Header: 'Maximum',
        columns: [
          {
            Header: 'Cars',
            accessor: 'cars'
          },
          {
            Header: 'Busses',
            accessor: 'busses'
          },
          {
            Header: 'Trucks',
            accessor: 'trucks'
          },
          {
            Header: 'Motorcycles',
            accessor: 'motorcycles'
          }
        ]
      },
      {
        Header: 'Average',
        columns: [
          {
            Header: 'Cars',
            accessor: 'cars'
          },
          {
            Header: 'Busses',
            accessor: 'busses'
          },
          {
            Header: 'Trucks',
            accessor: 'trucks'
          },
          {
            Header: 'Motorcycles',
            accessor: 'motorcycles'
          }
        ]
      }
    ];

    return (
      <div>
        <ReactTable data={data} columns={columns} />
      </div>
    );
  }
}

export default DataTable;
