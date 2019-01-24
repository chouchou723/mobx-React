import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'mobx-react';
import store from './store';
import RootRoute from './rootRoute';

class App extends Component {
  render() {
    return (
      <Provider store={new store()}>
        <RootRoute/>
      </Provider>
    );
  }
}

export default App;
