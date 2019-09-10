import React from 'react';
import HomePage from './pages/homepage.component';

import { Route } from 'react-router-dom';

import './App.css';

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page is here...</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
