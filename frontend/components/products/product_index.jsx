import React from 'react';
import shuffle from 'lodash/shuffle';
import ProductIndexItem from './product_index_item';

const ProductIndex = ({products}) => {
  let productIndexItems = Object.keys(products).map((id) => {
    return <ProductIndexItem key={products[id].name + id} product={products[id]} />;
  });
  return (
    <div className="product-wrapper">
      {shuffle(productIndexItems)}
    </div>
  );
};

export default ProductIndex;
