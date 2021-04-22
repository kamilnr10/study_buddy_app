import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { users as usersData } from 'data/users';

// const mockAPI = (success) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (usersData) {
//         resolve([...usersData]);
//       } else {
//         reject({ message: 'Error' });
//       }
//     }, 2000);
//   });
// };

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  // const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => console.log(data.students))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   setLoadingState(true);
  //   mockAPI()
  //     .then((data) => {
  //       setLoadingState(false);
  //       setUsers(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
