export const requestProducts = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/products',
    success
  });
};

export const addProduct = (product, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/products',
    data: {product},
    success,
    error
  });
};
