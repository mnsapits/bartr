import React from 'react';

const ProductDetail = ({product}) => (
  <div className="product-list-item">
    <img className="product-list-image" src="https://images-na.ssl-images-amazon.com/images/I/51Twrh-2zRL.jpg"/>
    <div className="product-list-caption">
      <p className="caption-header">{product.name}</p>
      <p className="caption-seller">{product.sellerId}</p>
      <p className="caption-price">{product.price}</p>
    </div>
  </div>
);

export default ProductDetail;
