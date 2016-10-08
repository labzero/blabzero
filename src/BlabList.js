import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Blab from './Blab';

class BlabList extends Component {
  static propTypes = {
    blabs: PropTypes.array.isRequired
  }

  render() {
    const { blabs } = this.props;

    return (
      <section>
        {blabs.map(blab =>
          <Blab key={`blab_${blab.id}`} id={blab.id} />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  blabs: state.blabs,
});

export default connect(mapStateToProps)(BlabList);
