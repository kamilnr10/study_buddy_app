import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import axios from 'axios';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  // const { users } = useContext(UsersContext);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/students/${id}`)
      .then(({ data }) => setStudents(data.students))
      .then((err) => console.log(err));
  }, []);

  return (
    <ViewWrapper>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
