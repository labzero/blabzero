import React, { Component } from 'react';
import Form from './Form';
import BlabList from './BlabList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="container">Blab Zero</h1>
        </header>

        <div className="container">
          <Form />
          <BlabList />
        </div>
      </div>
    );
  }
}

export default App;
