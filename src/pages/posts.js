import React from 'react';
import styled from 'styled-components';
import Layout from "../components/layout";
import Card from '../components/Card';
const Container = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;
  
  display: grid;
  flex: 1;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  
  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Title = styled.h1`
    margin-top: 50px;
`

const Pages = () => {
    return (
        <Layout>
            <Title>Articles</Title>
            <Container>
               <Card />
            </Container>
        </Layout>
    )
};

export default Pages;