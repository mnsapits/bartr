import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
    <div className="cart-container">
      {this.props.cart.map( product => (
      <CartItem product={product} />
      ))}
    </div>
  );}
}

export default Cart;
