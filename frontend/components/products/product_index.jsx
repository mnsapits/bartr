import React from 'react';
import ProductIndexItem from './product_index_item';

const ProductIndex = ({products}) => {
  let productIndexItems = Object.keys(products).map((id) => {
    return <ProductIndexItem key={products[id].name + id} product={products[id]} />;
  });
  return (
    <div className="product-list-items">
      {productIndexItems}
    </div>
  );
};

export default ProductIndex;
