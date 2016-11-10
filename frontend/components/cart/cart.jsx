import React from 'react';
import CartItem from './cart_item';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
      return (
      <div className="shopping-cart">
        {this.props.cart.map( product => (
        <CartItem key={product.id} product={product} destroyCartItem={this.props.destroyCartItem} />
        ))}
      </div>
    );}
}

export default Cart;
