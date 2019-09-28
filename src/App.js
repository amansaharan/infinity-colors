import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import SignInSignUp from './pages/signin-signup/signin-signup.component';
import Header from './components/header/header.component';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { Route, Switch } from 'react-router-dom';

import './App.css';
import ShopPage from './pages/shop/shop.component';
import { setCurrentUser } from './redux/user/user-actions';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRefe = await createUserProfileDocument(userAuth);
        userRefe.onSnapshot(snapshot => {
          console.log(snapshot);
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
          console.log(this.state);
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
