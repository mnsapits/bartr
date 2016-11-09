const CartItem = ({product}) => {


  return (
  <div class="cart-item">
      <div class="cart-item-image">
        <img src={product.image_url}/>
      </div>
      <div class="cart-item-details">
        <div class="cart-item-title">{product.name}</div>
        <p class="cart-item-description">{product.details}</p>
      </div>
      <div class="cart-item-location">
        {product.location}
      </div>
      <div class="cart-item-removal">
        <button class="remove-cart-item">
          Remove
        </button>
      </div>
      <div class="cart-item-price">{product.price}</div>
    </div>
  );
};
