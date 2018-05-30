import { createStore, compose } from 'redux';

import App from '../components/App';

// do not use this enhancer when in production environment
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(App.reducer, composeEnhancers());

export default store;
