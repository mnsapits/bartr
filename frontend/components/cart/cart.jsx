import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let theEnd = () => (alert("I won't take your money but I would appreciate an opportunity to interview!"));

  let subtotal = (this.props.cart.map(product => product.price).reduce((a, b) => a + b, 0)).toFixed(2);
  let tax = (subtotal * 0.05).toFixed(2);
  let shipping = (subtotal < 50 ? 10 : 0).toFixed(2);
  let grandtotal = (Number(subtotal) + Number(tax) + 15).toFixed(2);
  if(this.props.cart.length === 0) {
    return (<h3 className="cart-empty">Cart Empty</h3>);
  } else {
    return (
      <div className="shopping-cart">
        <h1>Shopping Cart</h1>
        <div className="column-labels">
          <label className="cart-item-image">Image</label>
          <label className="cart-item-details">Product</label>
          <label className="cart-item-location">Location</label>
          <label className="cart-item-removal">Remove</label>
          <label className="cart-item-price">Price</label>
          <label className="right-edge"></label>
        </div>

        {this.props.cart.map( product => (
        <CartItem key={product.name} product={product} destroyCartItem={this.props.destroyCartItem} />
        ))}

        <div className="totals">
          <div className="totals-item">
            <label>Subtotal</label>
            <div className="totals-value" id="cart-subtotal">{subtotal}</div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div className="totals-value" id="cart-tax">{tax}</div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div className="totals-value" id="cart-shipping">{shipping}</div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div className="totals-value" id="cart-total">{grandtotal}</div>
          </div>
        </div>

        <button onClick={theEnd}className="checkout">Checkout</button>

      </div>
    );
  }}
}

export default Cart;
