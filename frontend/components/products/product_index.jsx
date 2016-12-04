import React from 'react';
import shuffle from 'lodash/shuffle';
import ProductIndexItem from './product_index_item';


class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearProducts();
  }

  render() {
    const productIndexItems = Object.keys(this.props.products).map((id) => {
      return <ProductIndexItem
                key={this.props.products[id].name + id}
                product={this.props.products[id]}
                />;
    });

    return (
    <div className="product-wrapper">
      {shuffle(productIndexItems)}
    </div>
  );}
}

export default ProductIndex;
