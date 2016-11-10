export const requestCart = (success) => {
  $.ajax({
    method: 'GET',
    url: `/api/carts`,
    success
  });
};

export const addCartItem = (productId, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/carts`,
    data: {productId},
    success
  });
};

export const destroyCartItem = (productId, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/carts/${productId}`,
    success
  });
};
