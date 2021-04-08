import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
// import { Button } from 'components/atoms/Button/Button';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
// import FormField from 'components/molecules/FormField/FormField';

const UsersList = ({ users, isLoading }) => {
  return (
    <>
      <StyledTitle>{isLoading ? 'Loading...' : 'Users List'}</StyledTitle>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
