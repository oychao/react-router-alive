import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './src/store';

import App from './src/components/App';

import './style.less';

ReactDOM.render(
    <Provider store={store}>
        <App.view />
    </Provider>,
    document.getElementById('root')
);
