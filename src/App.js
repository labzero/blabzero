import React, { Component } from 'react';
import Form from './Form';
import BlabList from './BlabList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: {
        labzero: {
          username: 'Lab Zero',
          avatar: 'img/avatar.png'
        }
      },
      currentAuthor: 'labzero',
      blabs: [
        {
          author: 'labzero',
          id: 2,
          text: 'Blab three!'
        },
        {
          author: 'labzero',
          id: 1,
          text: 'Blab two!'
        },
        {
          author: 'labzero',
          id: 0,
          text: 'Blab one!'
        }
      ]
    };
  }

  addBlab = text => {
    this.setState(prevState => ({
      blabs: [
        {
          author: prevState.currentAuthor,
          id: prevState.blabs[0].id + 1,
          text
        },
        ...prevState.blabs
      ]
    }));
  }

  render() {
    const { authors, blabs } = this.state;

    return (
      <div>
        <header>
          <h1 className="container">Blab Zero</h1>
        </header>

        <div className="container">
          <Form addBlab={this.addBlab} />
          <BlabList authors={authors} blabs={blabs} />
        </div>
      </div>
    );
  }
}

export default App;
