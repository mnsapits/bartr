import React from 'react';
import { Link } from 'react-router';

class CartIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestCart();
  }

  render() {
  return (
    <Link to ="/cart">
    <img className="shop-cart" src="http://res.cloudinary.com/dmdj7eggw/image/upload/v1478726332/carticon_juveu1.png"/>
    </Link>
  );}
}

export default CartIcon;
