import React, { Component } from 'react';
import './App.css';

class App extends Component {
  static characterLimit = 140;

  constructor(props) {
    super(props);

    this.state = {
      authors: {
        labzero: {
          username: 'Lab Zero',
          avatar: 'img/avatar.png'
        }
      },
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
      ],
      textareaValue: ''
    };
  }

  handleChange = event => {
    this.setState({
      textareaValue: event.target.value
    });
  }

  isFormValid = () => {
    const { textareaValue } = this.state;

    return textareaValue.length !== 0 && textareaValue.length <= App.characterLimit;
  }

  render() {
    const { authors, blabs, textareaValue } = this.state;

    return (
      <div>
        <header>
          <h1 className="container">Blab Zero</h1>
        </header>

        <div className="container">
          <form>
            <textarea onChange={this.handleChange} value={textareaValue} />
            <div>
              {App.characterLimit - textareaValue.length}
              <button disabled={this.isFormValid() ? '' : 'disabled'}>Blab</button>
            </div>
          </form>

          <section>
            {blabs.map(blab => (
              <article key={`blab_${blab.id}`}>
                <img src={authors[blab.author].avatar} alt={authors[blab.author].username} />
                <div>
                  <a href="#">{authors[blab.author].username}</a>
                  <p className="blab__text">
                    {blab.text}
                  </p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
