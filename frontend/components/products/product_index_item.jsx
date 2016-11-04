import React from 'react';

const ProductIndexItem = ({product}) => (
  <div
    className="product-list-item">
    <img style={{maxHeight: 100}}
      className="product-list-image" src={product.image_url}/>
    <div className="product-list-caption">
      <p className="caption-header">{product.name}</p>
      <p className="caption-seller">{product.seller_name}</p>
      <p className="caption-price">{product.price}</p>
    </div>
  </div>
);

export default ProductIndexItem;
