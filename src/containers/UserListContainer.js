import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/index';
import UserList from '../components/UserList';

class UserListContainer extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <UserList users={this.props.users} />
      </div>
    );
  }
}

UserListContainer.propTypes = {
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserListContainer);