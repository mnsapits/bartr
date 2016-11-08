import React from 'react';
import { Link } from 'react-router';

const StoreItemDetail = ({product}) => {
return (
  <div
    className="store-item-tile">
    <div className="overlay"></div>
    <Link to={"product/"+ product.id} className="store-item-link-button">view</Link>
    <div className="inner-wrap">
      <img
        className="store-item-img"
        src={product.image_url}/>
      <div className="store-item-meta">
        <p className="store-item-title">{product.name}</p>
        <p className="store-item-price">${product.price}</p>
      </div>
    </div>
  </div>
);
};

export default StoreItemDetail;
