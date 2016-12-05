import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {requestProducts} from './actions/products_actions';


document.addEventListener('DOMContentLoaded', () => {
  injectTapEventPlugin();
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  // window.store = store;
  window.requestProducts = requestProducts;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
