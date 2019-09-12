import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import Header from './components/header/header.component';

import { Route, Switch } from 'react-router-dom';

import './App.css';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
