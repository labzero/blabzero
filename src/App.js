import React, { Component } from 'react';
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
      blabs: [
        {
          author: 'labzero',
          text: 'Blab three!'
        },
        {
          author: 'labzero',
          text: 'Blab two!'
        },
        {
          author: 'labzero',
          text: 'Blab one!'
        }
      ]
    };
  }

  render() {
    const { authors, blabs } = this.state;

    return (
      <div>
        <header>
          <h1 className="container">Blab Zero</h1>
        </header>

        <div className="container">
          <form>
            <textarea></textarea>
            <button>Blab</button>
          </form>

          <section>
            {blabs.map((blab, i) => (
              <article key={`blab_${i}`}>
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
