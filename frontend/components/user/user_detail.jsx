import React from 'react';
import { withRouter } from 'react-router';

const UserDetail = ({params}) => {
  return (
    <div className="user-store">
      <h1>User Store</h1>
    </div>
  );
};

export default withRouter(UserDetail);
