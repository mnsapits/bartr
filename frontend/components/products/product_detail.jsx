import React from 'react';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentProduct = this.props.currentProduct;
    const sellerStore = currentProduct.seller_store;
    const store = ` \'s Store`;
    console.log(currentProduct);
    return(
    <div className="product-detail">

      <div className="product-overview">
        <h3>{currentProduct.name}</h3>
        <p>{currentProduct.location}</p>
        <p>${currentProduct.price}</p>
      </div>

      <img
        className="product-detail-image"
        src={currentProduct.image_url}>
      </img>

      <div className="product-details">
        <label>Item Details</label>
        <p>{currentProduct.details}</p>
      </div>

      <aside className="seller-store">
        <a>{currentProduct.seller_name}{store}</a>
      </aside>

    </div>
    );
  }
}

export default ProductDetail;
