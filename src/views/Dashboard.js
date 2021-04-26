import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Title } from 'components/atoms/Title/Title';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import axios from 'axios';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/group')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudents(data.students))
      .then((err) => console.log(err));
  }, [id, groups]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Group {id}</Title>
        <nav>
          {groups.map((group) => {
            return (
              <Link key={group} to={`/group/${group}`}>
                {group}
              </Link>
            );
          })}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <UsersList users={students} />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
