import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import store from './src/store';
import App from './src/components/App';

import './index.less';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={createBrowserHistory()}>
      <App.view />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
