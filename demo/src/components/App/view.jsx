import React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import { AliveRoute } from 'react-router-alive';

import Foo from '../Foo';
import Bar from '../Bar';

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
                <Link to="/foo" replace>
                  Foo
                </Link>
              </li>
              <li>
                <Link to="/bar" replace>
                  Bar
                </Link>
              </li>
              <li />
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
}

export default hot(module)(App);
