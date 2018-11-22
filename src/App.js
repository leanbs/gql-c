import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PushNotification from './PushNotification'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidUpdate() {
    const { data: { newNotif : { label } } } = this.props;

    toast(label);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PushNotification/>
        </header>
        <ToastContainer />
      </div>
    );
  }
}

const subNewNotification = gql`
  subscription {
    newNotif {
      label
    }
  }
`;

export default graphql(subNewNotification)(App);
