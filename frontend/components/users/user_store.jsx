import React from 'react';
import { withRouter } from 'react-router';
import StoreItemDetail from '../products/store_item_detail';

const UserStore = ({ currentStore }) => {
  console.log(currentStore);
  let storeProducts = currentStore.products.map( product => (
    <StoreItemDetail
      key={product.id}
      product={product}
    />
  ));
  return (
    <div className="seller-store-container">
      <h1>{currentStore.username}</h1>
      <div className="seller-store-items-index">
        <div>
          {storeProducts}
        </div>
      </div>
    </div>
  );
};

export default withRouter(UserStore);
