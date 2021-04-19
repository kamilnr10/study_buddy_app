import React, { useState, useEffect } from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const API_TOKEN = '7cd8cf80a54919f0e2dbf2480379b0';

// const data = [
//   {
//     title: 'New computers at school',
//     category: 'Tech news',
//     content:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus provident quos perspiciatis aperiam odit tempora illo, adipisci, maxime exercitationem architecto, iusto expedita animi. Eligendi, perspiciatis! Unde tempore saepe placeat veritatis.',
//     image: 'https://unsplash.it/500/400',
//   },
//   {
//     title: '2New computers at school',
//     category: 'Tech news',
//     content:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus provident quos perspiciatis aperiam odit tempora illo, adipisci, maxime exercitationem architecto, iusto expedita animi. Eligendi, perspiciatis! Unde tempore saepe placeat veritatis.',
//     image: 'https://unsplash.it/500/400',
//   },
//   {
//     title: '3New computers at school',
//     category: 'Tech news',
//     content:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus provident quos perspiciatis aperiam odit tempora illo, adipisci, maxime exercitationem architecto, iusto expedita animi. Eligendi, perspiciatis! Unde tempore saepe placeat veritatis.',
//     image: 'https://unsplash.it/500/400',
//   },
//   {
//     title: '3New computers at school',
//     category: 'Tech news',
//     content:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus provident quos perspiciatis aperiam odit tempora illo, adipisci, maxime exercitationem architecto, iusto expedita animi. Eligendi, perspiciatis! Unde tempore saepe placeat veritatis.',
//     image: 'https://unsplash.it/500/400',
//   },
// ];

const NewsSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
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
                  id
                }
              }
              }`,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data: { data } }) => {
        console.log(data);
        setArticles(data.allArticles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {articles.map(({ title, category, content, image = null }) => (
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
      ))}
    </Wrapper>
  );
};

export default NewsSection;
