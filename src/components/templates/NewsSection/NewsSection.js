import React, { useState, useEffect } from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_DATOCMS_TOKEN;

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    console.log(API_KEY);
    axios
      .post(
        'https://graphql.datocms.com/',
        {
          query: `
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
              }`,
        },
        {
          headers: {
            authorization: `Bearer ${API_KEY}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        console.log(data);
        setArticles(data.allArticles);
      })
      .catch(() => setError("Sorry we couldn't load articles for you"));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>

      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button>Read me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
      {error ? <NewsSectionHeader>{error}</NewsSectionHeader> : null}
    </Wrapper>
  );
};

export default NewsSection;
