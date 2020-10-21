import React from 'react';
import styled from 'styled-components';
import { graphql, useQuery } from 'gatsby';
import Img from "gatsby-image";
import ReactMarkdown from 'react-markdown';

const Title = styled.h1`
  font-weight: 200;
  font-size: 38px;
  color: black;
`;


const BlogWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-top: 50px;
`;


const Header = styled.h2`
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 100px;
    
`;

const Date = styled.span`
    font-weight: 400;
    color: black;
    padding-bottom: 10px;
    font-size: 12px;

`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


const Article = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    @media (min-width: 968px) {
      padding: 50px 350px;

    }
    div {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    };
    div h3 {
        font-size: 24px;
        font-weight: 600;
    }


    
`;

const Subheader = styled.h3`
    font-weight: 900;
    font-size: 12px;
`;

const Text = styled.span`
    font-weight: 450;
    line-height: 1.6;
    margin-bottom: 30px;
`;


const ImageContainer = styled.div`
    display: flex; 
    width: 100%;
    div {
        width: 50%;
    }
`;

const SummaryTitle = styled.h3`
    font-size: 24px;
    font-weight: 300;
    padding-left: 6px;
`

const ImageSection = styled.section`
    display: flex;
    width: 100%;
    div{ 
      width: 50%;
    }
    div:last-child {
        margin-top: 30px;
        padding: 20px;
    };
    
    @media (max-width: 968px) {
      flex-direction:column;
      div {
        width: 100%;
      }
      div:last-child {
        width: 100%;
        margin-top: 50px;
        padding-left: 0;
        padding-right: 0;
      }
    }

`;

const ListWrapper = styled.div`
    border: 2px solid black;
    margin: 0 auto;
    padding-top: 0;
`;  

const ImageAndCaption = styled.div`
  background: url(${({ url }) => url && url});
  height: 600px;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const renderers = {
  image: (({ src }) =>  <ImageAndCaption url={src} /> )
}

const BlogPost = ({ data: { strapiArticle } }) => {
  
    return (
      <>
        <BlogWrapper>
          <Section>
            <div>
              <Date>Published: 16th August 2020.</Date>
              <div>
                <Date>4 min read.</Date>
              </div>
              <Title>{strapiArticle.title}</Title>
              
              <Date>Written by Ben Simonson</Date>
              <hr />
            </div>
          </Section>
          <ImageSection>
            <Img fluid={strapiArticle.cover.childImageSharp.fluid} />
            <div style={{ paddingTop: 0, marginTop: "-27px" }}>
              <ListWrapper>
                <SummaryTitle>In brief:</SummaryTitle>
                <ul>
                  <li>Attacks have increased in Mozambique</li>
                  <li>French energy invesmtnet under threat</li>
                  <li>More stuff here</li>
                  <li>It's not looking good in Mozambique</li>
                </ul>
              </ListWrapper>
            </div>
          </ImageSection>
          <Article>
              <ReactMarkdown source={strapiArticle.content} 
                transformImageUri={uri => uri.startsWith('https') ? uri : 
                `${process.env.IMAGE_BASE_URL}${uri}` }
                renderers={renderers}
              />
          </Article>
        </BlogWrapper>
      </>
    )
};

export default BlogPost;