import React from 'react';

import Layout from '../components/Layout';
import Intro from '../components/Intro';
import TimeSeriesChart from '../components/TimeSeriesChart';
import DataTable from "../components/DataTable";

const HomePage = () => {
  return (
    <Layout>
      <Intro />
      <TimeSeriesChart />
      <DataTable />
    </Layout>
  );
};

export default HomePage;
