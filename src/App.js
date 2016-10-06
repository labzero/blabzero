import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
            <article>
              <img src="img/avatar.png" alt="Lab Zero" />
              <div>
                <a href="#">Lab Zero</a>
                <p className="blab__text">
                  Blab!
                </p>
              </div>
            </article>
            <article>
              <img src="img/avatar.png" alt="Lab Zero" />
              <div>
                <a href="#">Lab Zero</a>
                <p className="blab__text">
                  Blab!
                </p>
              </div>
            </article>
            <article>
              <img src="img/avatar.png" alt="Lab Zero" />
              <div>
                <a href="#">Lab Zero</a>
                <p className="blab__text">
                  Blab!
                </p>
              </div>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
