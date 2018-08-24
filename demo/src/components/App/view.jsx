import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import * as actions from './actions';

import Foo from '../Foo';
import Bar from '../Bar';

import logo from './logo.svg';
import './style.less';

class App extends React.Component {
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
      <div className="app">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/foo">Foo</Link>
              </li>
              <li>
                <Link to="/bar">Bar</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" render={() => <Redirect to="/foo" />} />
            <Route exact path="/foo" component={Foo.view} />
            <Route exact path="/bar" component={Bar.view} />
          </div>
        </Router>
      </div>
    );
  }
}

// I don't think PropTypes is a good idea for type checks,
// if you really need it, use flow or typescript instead

const mapStateToProps = (state, props) => ({
  count: state.count
});
const mapDispatchToProps = (dispatch, props) => ({
  handleCount: num => dispatch(actions.add(num))
});

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
