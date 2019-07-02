import React from 'react';

import Layout from '../components/Layout';
import Intro from '../components/Intro';
import TimeSeriesChart from '../components/TimeSeriesChart';

const HomePage = () => {
  return (
    <Layout>
      <Intro />
      <TimeSeriesChart />
    </Layout>
  );
};

export default HomePage;