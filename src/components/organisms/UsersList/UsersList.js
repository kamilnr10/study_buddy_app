import React, { Component } from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

class UsersList extends React.Component {
  state = {
    users: users,
  };

  deleteUser = (name) => {
    const filteredUsers = this.state.users.filter((user) => user.name !== name);
    this.setState({
      users: filteredUsers,
    });
    console.log(name);
  };

  render() {
    return (
      <Wrapper>
        <StyledList>
          {this.state.users.map((userData) => (
            <UsersListItem deleteUser={this.deleteUser} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
