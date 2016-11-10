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

export const requestProduct = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/products/${id}`,
    success
  });
};

export const searchProducts = (query, success) => {
  $.ajax({
    method: 'GET',
    url: '/api/products',
    data: {query},
    success
  });
};
