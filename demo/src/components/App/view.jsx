import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import AliveRoute from 'react-keep-alive';

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
            <AliveRoute
              exact
              path="/"
              render={() => {
                return <Redirect to="/foo" />;
              }}
            />
            <AliveRoute exact path="/foo" component={Foo.view} />
            <AliveRoute exact path="/bar" component={Bar.view} />
          </div>
        </Router>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this._reactInternalFiber);
  }
}

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
