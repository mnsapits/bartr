import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ProductIndex from './products/product_index';
import ProductsIndexContainer from './products/products_index_container';
import { requestProducts } from '../actions/products_actions';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const requestAllProductsOnEnter = () => {
    store.dispatch(requestProducts());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <Route path="/products" component={ProductsIndexContainer} onEnter={requestAllProductsOnEnter} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
