import React, { useState, useContext, useReducer } from 'react';
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
  consent: false,
  error: '',
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'INPUT CHANGE':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'CLEAR VALUES':
      return initialFormState;
    case 'CONSENT TOGGLE':
      return {
        ...state,
        consent: !state.consent,
      };
    case 'THROW ERROR':
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  // const [formValues, setFormValues] = useState(initialFormState);
  const context = useContext(UsersContext);

  const handleInputChange = (e) => {
    dispatch({
      type: 'INPUT CHANGE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      context.handleAddUser(formValues);
      dispatch({ type: 'CLEAR VALUES' });
    } else {
      dispatch({ type: 'THROW ERROR', errorValue: 'You need to give consent' });
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new user</Title>
      <FormField label="Name" id="Name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="Attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="Average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        value={formValues.average}
        onChange={() => dispatch({ type: 'CONSENT TOGGLE' })}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddUser;
