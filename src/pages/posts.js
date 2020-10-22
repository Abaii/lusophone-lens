import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
`;

const Title = styled.h1`
    margin-top: 50px; 
    font-weight: 900;
`;

const ImageWrapper = styled.div`
  border: 1px solid black;
  height: 150px;
  width: 50%;
  margin-right: 40px;
  background: url(${({ url }) => url && url });
  background-size: cover;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  width: 25%;
  span:first-child {
    font-weight: bold;
    color: #2f79da;
    font-size: 10px;

  };
  span:last-child {
    font-size: 10px;
    color: #2f79da;
    font-weight: 400;
    text-transform: capitalize;
  };
  margin-right: 40px;
`;
const Description = styled.p`
    font-weight: 200;
    opacity: 0.7;
    line-height: 1.4;
    font-size: 12px;
`;

const DescriptionWrapper = styled.div`
  width: 25%;
  font-size: 12px;
`;

const ArticleWrapper = styled.div`
  display: flex;
`

const SingleArticle = ({ title, description, url }) => {
  return (
    <ArticleWrapper>
      <ImageWrapper url={url}/>
      <Text><span>Your mum</span><br/>
      {title}<br/>
      <span>Supreme leader simonson - Oct 16.</span>
      </Text>
      <DescriptionWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
    </ArticleWrapper>
  )
}
const Pages = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(`${process.env.STRAPI_URL}/articles`).then((response) => {
          setData(response.data);
        });
    }, []);
    return (
        <Layout>
            <Title>Analysis</Title>
            <Container>
              
               {data && data.map((article) => {
                 return (
                   <SingleArticle 
                title={article.title}
                description={article.description}
                url={article.cover.formats.small.url}
               />
                 )
               })}
            </Container>
        </Layout>
    )
};

export default Pages;