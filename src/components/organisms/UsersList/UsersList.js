import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle } from './UsersList.styles';
// import FormField from 'components/molecules/FormField/FormField';

const UsersList = ({ users }) => {
  return (
    <>
      <StyledTitle>Students list</StyledTitle>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
