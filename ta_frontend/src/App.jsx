import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';

import './App.css';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <Main>
      <Header />
    </Main>
  );
}

export default App;
