import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
`;

const Content = styled.div`
  flex-grow: 1;
`

function App() {
  return (
    <Main>
      <Header />
      <Content />
      <Footer />
    </Main>
  );
}

export default App;
