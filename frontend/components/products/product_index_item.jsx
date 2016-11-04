import React from 'react';

const ProductIndexItem = ({product}) => (
  <div className="product-list-item">
    <img className="product-list-image" src={product.image_url}/>
    <div className="product-list-caption">
      <p className="caption-header">{product.name}</p>
      <p className="caption-seller">{product.seller_id}</p>
      <p className="caption-price">{product.price}</p>
    </div>
  </div>
);

export default ProductIndexItem;
