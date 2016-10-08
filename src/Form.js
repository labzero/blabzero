import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
  static propTypes = {
    addBlab: PropTypes.func.isRequired
  }

  static characterLimit = 140;

  constructor(props) {
    super(props);

    this.state = {
      textareaValue: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBlab(this.state.textareaValue);
    this.setState({
      textareaValue: ''
    });
  }

  handleChange = event => {
    this.setState({
      textareaValue: event.target.value
    });
  }

  isFormValid = () => {
    const { textareaValue } = this.state;

    return textareaValue.length !== 0 && textareaValue.length <= Form.characterLimit;
  }

  render() {
    const { textareaValue } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange} value={textareaValue} />
        <div>
          {Form.characterLimit - textareaValue.length}
          <button disabled={this.isFormValid() ? '' : 'disabled'}>Blab</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBlab: text => dispatch({
    type: 'ADD_BLAB',
    text
  })
})

export default connect(null, mapDispatchToProps)(Form);
