export const requestUserStore = (id, success) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    success
    });
};
