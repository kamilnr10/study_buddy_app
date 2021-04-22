import React from 'react';
import { screen } from '@testing-library/jest-dom';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection from 'components/templates/NewsSection/NewsSection';
import { renderWithProviders } from 'helpers/renderWithThemeProvider';

const mock = new MockAdapter(axios);

const query = `
{ 
  allArticles {
    id
    title
    category
    content
    image {
      url
    }
  }
  }`;

// do wyjasnienia

mock.onPost('/', { query }).reply(500);

describe('News Section', () => {
  it('Render articles', async () => {
    renderWithProviders(<NewsSection />);
    // eslint-disable-next-line no-restricted-globals
    await screen.findByText(/Sorry/);
  });
});
