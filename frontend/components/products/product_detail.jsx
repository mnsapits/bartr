import React from 'react';
import StoreItemDetail from './store_item_detail';
import { Link } from 'react-router';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearCurrentProduct();
  }


  renderStore() {
    const sellerStore = this.props.currentProduct.seller_store;

    return (
      sellerStore.map(product => {
        return <StoreItemDetail key={product.id} product={product} />;
      })
    );
  }

  render() {
    const capitalizeFirstLetter = (string) => (
      string.charAt(0).toUpperCase() + string.slice(1)
    );
    const currentProduct = this.props.currentProduct;
    const sellerStore = currentProduct.seller_store;
    const store = `\'s Store`;
    return(
      <div className="product-container">
        <div className="product-detail">
          <div className="col-left">
            <img
              className="product-detail-image"
              src={currentProduct.image_url}>
            </img>

            <div className="product-details">
              <label>Item Details</label>
              <p>{currentProduct.details}</p>
            </div>
          </div>

          <div className="col-right">
            <div className="product-overview">
              <h3>{currentProduct.name}</h3>
              <p>Ships worldwide from {currentProduct.location}</p>
              <p>${currentProduct.price}</p>
              <button onClick={this.props.addCartItem(currentProduct.id)}>Add to cart</button>
            </div>

            <aside className="seller-store">
              <Link to={"users/" + currentProduct.seller_id} className="store-name">{capitalizeFirstLetter(currentProduct.seller_name)}{store}</Link>
              {this.renderStore()}
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
