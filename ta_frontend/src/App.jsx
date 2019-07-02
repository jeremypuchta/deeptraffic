import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
