import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

import MediaQuery from 'react-responsive';
import {BrowserRouter} from 'react-router-dom';
import PCApp from '../views/pc/pc_app' 
import MobileApp from '../views/mobile/mobile_app' 

class RootRoute extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App"> 
          <MediaQuery query='(min-device-width:1224px)'>
              <PCApp />
          </MediaQuery>
          <MediaQuery query='(max-device-width:1224px)'>
              <MobileApp />
          </MediaQuery>
        </div>
      </BrowserRouter>
    );
  }
}

export default RootRoute;
