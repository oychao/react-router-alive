import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import App from '../App';

class Field extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.handleInput(e.target.value);
  }

  render() {
    const { text } = this.props;
    return (
      <div>
        <input type="text" onInput={this.handleInput} defaultValue={text} />
        <h4>{text}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  text: state.app.text
});
const mapDispatchToProps = (dispatch, props) => ({
  handleInput: text => dispatch(App.actions.input(text))
});

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Field)
);
