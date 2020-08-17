import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image";
import TwitterIcon from '../../assets/twitter.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import InstagramIcon from '../../assets/instagram.svg';


const Title = styled.h1`
  font-weight: 200;
  font-size: 64px;
  color: black;
`;
const Description = styled.p`
    font-weight: 200;
    opacity: 0.7;
    line-height: 1.4;
`;

const BlogWrapper = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    padding: 20px;
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
    padding: 50px 500px;
    div {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
    };
    div h3 {
        font-size: 42px;
        font-weight: 600;
    }


    
`;

const Subheader = styled.h3`
    font-size: 24px;
    font-weight: 900;
    color: black;
`;

const Text = styled.span`
    font-weight: 200;
    line-height: 1.6;
`

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "lisbon.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
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
    div {
        width: 50%;
        padding: 20px;
    };

`;

const ListWrapper = styled.div`
    border: 2px solid black;
    margin: 0 auto;
    padding-top: 0;
`;  

const BlogPost = () => {
    const data = useStaticQuery(query);
    return (
      <>
        <BlogWrapper>
          <Section>
            <div style={{ paddingRight: "50%" }}>
              <Date>Published: 16th August 2020.</Date>
              <Title>Mozambique violence.</Title>
              <Description>
                The region of Cabo Delgado, in Northern Mozambique has
                experienced violence from radical Islamic extremism since
                October 2017, however, there has been a dramatic increase in the
                frequency of these attacks during the first months of 2020.
                Whilst recently, ISIL (ISIS) have claimed responsibility for the
                attacks, the group call themselves ‘Ahlu Sunnah Wa-Jama’ (ASW)
                (See Aljazeera, 2020).
              </Description>
              <Date>Written by Ben Simonson</Date>
              <hr />
            </div>
          </Section>
          <ImageSection>
            <Img fluid={data.fileName.childImageSharp.fluid} />
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
            <div>
              <Subheader>Background</Subheader>
              <Text>
                The region of Cabo Delgado, in Northern Mozambique has
                experienced violence from radical Islamic extremism since
                October 2017, however, there has been a dramatic increase in the
                frequency of these attacks during the first months of 2020.
                Whilst recently, ISIL (ISIS) have claimed responsibility for the
                attacks, the group call themselves ‘Ahlu Sunnah Wa-Jama’ (ASW)
                (See Aljazeera, 2020).
              </Text>
            </div>
            <div>
              <Subheader>Significance</Subheader>
              <Text>
                The recent developments are particularly concerning as not only
                has the frequency of the attacks increased, but they have also
                become more extreme in their nature. Indeed, local media reports
                have reported cases of beheadings, torture and kidnappings
                becoming increasingly used by the ASW militants (See Zitamar
                News, 2020). Furthermore, the ongoing violence has led to the
                displacement of 100,000 people and creating an internal refugee
                crisis (See UNHCR, 2020).
              </Text>
            </div>
            <div>
              <Subheader>Forecast</Subheader>
              <Text>
                An analysis of data compiled from ACLED shows the increase in
                violence over recent months (see figure 1). The most recent
                months have experienced the highest numbers of attacks carried
                out by ASW. Closer analysis shows that in the first two months
                of 2020, there were 40 attacks carried out by ASW in Cabo
                Delgado. By comparison, the same two-month date range for 2019
                shows that only 16 attacks were carried out, representing a 150%
                increase from one year to the next.{" "}
              </Text>
            </div>
          </Article>
        </BlogWrapper>
      </>
    )
};

export default BlogPost;