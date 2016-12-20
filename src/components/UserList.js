import React, { PropTypes } from 'react';

function UserList({ users }) {
  const list = users.map(user => {
    return (
      <div key={user.name} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Cheese Factory</p>
        <a className="btn btn-primary">Email</a>
      </div>
    );
  });

  return (
    <div>{list}</div>
  );
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;