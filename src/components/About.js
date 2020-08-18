import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby";

const AboutWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 30px 100px;
    height: 100vh;
    color: white;
    background-color: pink;
    
`;
const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const LinksWrapper = styled.div`

`
const NavLinks = styled.span`
    font-weight: 300;
    margin-left: 20px;
    font-size: 22px;
`;

const AboutParagraph = styled.div`
    flex-grow: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 200px;

    p {
        font-weight: 600;
        font-size: 26px;
        line-height: 1.4;
    }
`;


export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ImageWrapper = styled.div`
    width: 140px;
    height: 140px;
    background-color: #2F79DA;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
`;

const LogoText = styled.span`
    color: #ffcad4;
    font-size: 14px;
    font-weight: 900;
`;

const LogoWords = styled.span`
  font-weight: 900;
  letter-spacing: 1.4;
  text-transform: uppercase;
  color: #2f79da;
  font-size: 12px;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;

`;

const BulletPoint = styled.div`
    background-color: #2f79da;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    margin: 0 5px;
`;

const LogoWordsContainer = styled.div`
    display: flex; 
    align-items: center;
`

const About = () => {
    const data = useStaticQuery(query);

    return (
      <AboutWrapper>
        <Navbar>
          <LogoContainer>
            <ImageWrapper>
              <LogoText>
                <i>
                  Lusophone
                  <br />
                  Lens
                </i>
              </LogoText>
            </ImageWrapper>
            <LogoWordsContainer>
              <LogoWords>Analysis</LogoWords>
              <BulletPoint />
              <LogoWords>Insight</LogoWords>
              <BulletPoint />
              <LogoWords>Risk</LogoWords>
            </LogoWordsContainer>
          </LogoContainer>
        </Navbar>
        <AboutParagraph>
          <p>
            Lusophone lens is an independent political risk advisory project
            focusing on the Portuguese-speaking world. Our area of research
            focuses primarily on the political, economic and environmental
            affairs of Portugal, Brazil, Angola, Mozambique and Macau.
          </p>
          <p>
            Lusophone lens seeks to provide a platform to track major
            developments within the lusophone world. Thus, helping governments,
            businesses, investors and private actors make informed decisions and
            act responsibly.
          </p>
        </AboutParagraph>
      </AboutWrapper>
    )
};

export default About;