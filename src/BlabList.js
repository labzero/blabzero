import React, { Component, PropTypes } from 'react';
import Blab from './Blab';

class BlabList extends Component {
  static propTypes = {
    authors: PropTypes.object.isRequired,
    blabs: PropTypes.array.isRequired
  }

  render() {
    const { authors, blabs } = this.props;

    return (
      <section>
        {blabs.map(blab =>
          <Blab key={`blab_${blab.id}`} author={authors[blab.author]} text={blab.text} />
        )}
      </section>
    );
  }
}

export default BlabList;
