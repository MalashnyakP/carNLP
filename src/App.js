import React, { Component } from 'react';
import Header from './Header';
import DialogFlowSector from './DialogFlowSector';
import LuisSector from './LuisSector';
import logo from './logo.svg';
import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <div className='container'>
              <div className='row'>
                  <div className='col-md-6'>
                      <DialogFlowSector />
                  </div>
                  <div className='col-md-6'>
                      <LuisSector />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
