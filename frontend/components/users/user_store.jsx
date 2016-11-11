import React from 'react';
import { withRouter } from 'react-router';
import StoreItemDetail from '../products/store_item_detail';

class UserStore extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearCurrentStore();
  }


  render() {
    let currentStore = this.props.currentStore;
    let storeProducts = currentStore.products.map( product => (
      <StoreItemDetail
        key={product.id}
        product={product}
        />
    ));

  return (
    <div className="seller-store-container">
      <h1 className="store-title">{currentStore.username}{"'s Store"}</h1>
      <div className="seller-store-items-index">
        <div>
          {storeProducts}
        </div>
      </div>
    </div>
  );}
}

export default withRouter(UserStore);
