import React, { useState, useContext } from 'react';
// import { users as usersData } from 'data/users';
// import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms//Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const context = useContext(UsersContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    context.handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField label="Name" id="Name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="Attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="Average" name="average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
