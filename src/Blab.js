import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (state, ownProps) => {
  const blab = state.blabs.entities.blabs[ownProps.id];
  return {
    author: state.authors[blab.author],
    text: blab.text
  };
};

export default connect(mapStateToProps)(Blab);
