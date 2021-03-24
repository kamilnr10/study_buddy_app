import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle.js';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import UsersList from 'components/organisms/UsersList/UsersList';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UsersList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
