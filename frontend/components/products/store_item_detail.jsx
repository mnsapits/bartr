import React from 'react';
import { Link } from 'react-router';

const StoreItemDetail = ({product}) => {
return (
  <div
    className="store-item-tile">
    <Link to={"product/"+ product.id} className="overlay"></Link>
    <Link to={"product/"+ product.id} className="store-item-link-button">view</Link>
    <Link to={"product/"+ product.id} className="inner-wrap">
      <img
        className="store-item-img"
        src={product.image_url}/>
      <div className="store-item-meta">
        <p className="store-item-title">{product.name}</p>
        <p className="store-item-price">${product.price}</p>
      </div>
    </Link>
  </div>
);
};

export default StoreItemDetail;
