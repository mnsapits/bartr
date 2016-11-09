export const requestCart = (success) => {
  $.ajax({
    method: 'GET',
    url: `/api/carts`,
    success
  });
};

export const addCartItem = (cartItem, success) => {
  $.ajax({
    method: 'POST',
    url: `/api/carts`,
    data: {cartItem},
    success
  });
};

export const destroyCartItem = (id, success) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/carts/${id}`
  });
};
