import React from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper, ContentWrapper } from './NewsSection.styles';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus provident quos perspiciatis aperiam odit tempora illo, adipisci, maxime exercitationem architecto, iusto expedita animi. Eligendi, perspiciatis! Unde tempore saepe placeat veritatis.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: '2New computers at school',
    category: 'Tech news',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus provident quos perspiciatis aperiam odit tempora illo, adipisci, maxime exercitationem architecto, iusto expedita animi. Eligendi, perspiciatis! Unde tempore saepe placeat veritatis.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: '3New computers at school',
    category: 'Tech news',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus provident quos perspiciatis aperiam odit tempora illo, adipisci, maxime exercitationem architecto, iusto expedita animi. Eligendi, perspiciatis! Unde tempore saepe placeat veritatis.',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: '3New computers at school',
    category: 'Tech news',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus provident quos perspiciatis aperiam odit tempora illo, adipisci, maxime exercitationem architecto, iusto expedita animi. Eligendi, perspiciatis! Unde tempore saepe placeat veritatis.',
    image: 'https://unsplash.it/500/400',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="article" /> : null}
          </ContentWrapper>
          <Button>Read me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
