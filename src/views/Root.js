import React, { useState, useEffect } from 'react';
// import UsersList from 'components/organisms/UsersList/UsersList';
// import Form from 'components/organisms/Form/Form';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';
import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
// import { users as usersData } from 'data/users';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { UsersProvider } from 'providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route exact path="/">
                <Redirect to="/group" />
              </Route>
              <Route path="/add-user">
                <AddUser />
              </Route>
              <Route path="/group/:id?">
                <Dashboard />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
