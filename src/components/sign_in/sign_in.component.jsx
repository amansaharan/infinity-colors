import React, { Component } from 'react';

import './sign_in.styles.scss';
import FormInput from '../form-input/form-input.component';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState(() => {
      return {
        email: '',
        password: ''
      };
    });
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />

          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}
