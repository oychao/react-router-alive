import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Redirect, Link } from 'react-router-dom';
import { AliveRoute } from 'react-router-alive';
import { hot } from 'react-hot-loader';

import Counter from '../Counter';
import Field from '../Field';

import './style.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <HashRouter>
          <div>
            <ul className="app__router">
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/field">Field</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" render={() => <Redirect to="/counter" />} />
            <AliveRoute exact path="/counter" component={Counter.view} activeClass="active" disactiveClass="disactive" />
            <AliveRoute exact path="/field" component={Field.view} activeClass="active" disactiveClass="disactive" />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default hot(module)(App);
