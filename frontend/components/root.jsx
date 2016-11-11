import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';
import ProductIndex from './products/product_index';
import SessionFormContainer from './session_form/session_form_container';
import ProductsIndexContainer from './products/products_index_container';
import UserStoreContainer from './users/user_store_container';
import ProductDetailContainer from './products/product_detail_container';
import CartContainer from './cart/cart_container';
import { requestProducts, requestProduct } from '../actions/products_actions';
import { requestUserStore } from  '../actions/user_actions';
import { requestCart } from '../actions/cart_actions';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const requestAllProductsOnEnter = () => {
    store.dispatch(requestProducts());
  };

  const requestProductDetailOnEnter = (nextState) => {
    store.dispatch(requestProduct(nextState.params.id));
  };

  const requestUserStoreOnEnter = (nextState) => {
    store.dispatch(requestUserStore(nextState.params.id));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Splash} />
          <Route path="products" component={ProductsIndexContainer} onEnter={requestAllProductsOnEnter}/>
          <Route path="product/:id" component={ProductDetailContainer} onEnter={requestProductDetailOnEnter}/>
          <Route path="users/:id" component={UserStoreContainer} onEnter={requestUserStoreOnEnter}/>
          <Route path="cart" component={CartContainer} onEnter={_ensureLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
