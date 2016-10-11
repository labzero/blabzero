import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Blab from './Blab';

class BlabList extends Component {
  static propTypes = {
    blabIds: PropTypes.array.isRequired
  }

  render() {
    const { blabIds } = this.props;

    return (
      <section>
        {blabIds.map(id =>
          <Blab key={`blab_${id}`} id={id} />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  blabIds: state.blabs.result,
});

export default connect(mapStateToProps)(BlabList);
