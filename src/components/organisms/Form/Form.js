import React from 'react';
// import { users as usersData } from 'data/users';
// import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Button } from 'components/atoms/Button/Button';
import { StyledList, StyledTitle, Wrapper } from '../UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="Name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="Attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="Average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  );
};

export default Form;
