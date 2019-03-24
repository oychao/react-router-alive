import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import App from '../App';

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount() {
    this.props.handleCount(1);
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={this.handleCount}>Click me!</button>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this);
  }
}

const mapStateToProps = (state, props) => ({
  count: state.app.count
});
const mapDispatchToProps = (dispatch, props) => ({
  handleCount: num => dispatch(App.actions.add(num))
});

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter)
);
