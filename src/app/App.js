import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Router from './Router'; 

export default class App extends Component {
  render() { 
    return (
      <div className="App">
        <Router/> 
      </div>
    );
  }
  
}

