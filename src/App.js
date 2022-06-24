import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';
 import { render } from '@testing-library/react';

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main className="container" style={{marginLeft:500, marginTop:50}}>
      <Counters />
    </main>
    </React.Fragment>
  );
 
}

export default App;
