import React from 'react';
import { Link } from 'react-router';

const ProductIndexItem = ({product}) => {
  return (
  <div
    className="product-tile">
    <div className="overlay"></div>
    <Link to={"product/"+ product.id} className="product-link-button">view</Link>
    <div className="inner-wrap">
      <img
        className="product-img"
        src={product.image_url}/>
      <div className="product-meta">
        <p className="product-title">{product.name}</p>
        <p className="product-seller">Sold By: {product.seller_name}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  </div>
);
};

export default ProductIndexItem;
