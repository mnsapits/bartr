import React from 'react';

const CartItem = ({product, destroyCartItem}) => {
  return (
  <div className="cart-item">
      <div className="cart-item-image">
        <img src={product.image_url}/>
      </div>
      <div className="cart-item-details">
        <div className="cart-item-title">{product.name}</div>
        <p className="cart-item-description">{product.details}</p>
      </div>
      <div className="cart-item-location">
        {product.location}
      </div>
      <div className="cart-item-removal">
        <button
          className="remove-cart-item"
          onClick={destroyCartItem(product.id)}>
          Remove
        </button>
      </div>
      <div className="cart-item-price">{product.price}</div>
    </div>
  );
};

export default CartItem;
