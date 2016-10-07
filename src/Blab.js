import React, { Component, PropTypes } from 'react';

class Blab extends Component {
  static propTypes = {
    author: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    const { author, text } = this.props;

    return (
      <article>
        <img src={author.avatar} alt={author.username} />
        <div>
          <a href="#">{author.username}</a>
          <p className="blab__text">
            {text}
          </p>
        </div>
      </article>
    );
  }
}

export default Blab;
