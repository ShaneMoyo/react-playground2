import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from '../components/search/Search'; 
import Gists from '../components/gists/Gists'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
          <Gists/> 
      </header>
    </div>
  );
}

export default App;
