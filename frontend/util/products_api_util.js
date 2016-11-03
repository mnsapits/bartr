export const requestProducts = (success) => {
  $.ajax({
    method: 'GET',
    url: '/api/products',
    success
  });
};
