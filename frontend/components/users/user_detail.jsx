import React from 'react';
import { withRouter } from 'react-router';

const UserDetail = ({params}) => {
  debugger
  return (
    <div className="user-shop">
      <h4>{params.username}</h4>
      <ul>
        <li>their products</li>
      </ul>
    </div>
  );
};

export default withRouter(UserDetail);
