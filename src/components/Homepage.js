import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby';
import Logo from './Logo';
import About from './About';
import BlogIcon from '../assets/blog.svg';
import HomeIcon from '../assets/home.svg';

const NavContainer = styled.div`
    height: 240px;
    display: sticky;

`;

const NavBar = styled.div`
  height: 119px;
  display: flex;
  justify-content: flex-end;
  padding: 17px;
  margin-right: 150px;
  padding-top: 30px;
`
const LogoBar = styled.div`
    height: 150px;
    display: flex;
    justify-content: flex-start;
    margin-top: -40px;
    padding-left: 50px;
`;

const Icons = styled.div`
    width: 30px;
    height: 30px; 
    color: black;
    border-radius: 50%;
    border: 1px solid black;    
    margin: 20px;
`;


const ImageWrapper = styled.div`
    padding-right: 250px;
    margin-left: -20px;
`;

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "jesus.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, maxHeight: 1500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const SubTitle = styled.h2`
    color: black;
    font-size: 93px;
    margin-top: -90px;
    position: absolute;
    width:500px;
    right: 300px;
    span { 
        color: white;
    }
 `;

const VertNavWrapper = styled.div`
 display: flex;
 flex-direction: column;
`;

const VertNav = styled.h2`
    font-size: 47px;
    color: black;
`;

const Footer = styled.div`
    display: flex;
    padding: 0 50px;

    div {
        margin-left: 30px;
    }
    div:first-child {
        margin-left: 0;
    }
  
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -60px;
  span:first-child {
    font-size: 16px;
    font-weight: bold;
    padding-top: 0;
  }
  span {
    font-size: 12px;
    padding-top: 5px;
  }
`

const IconWrapper = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 20px;
`

const Homepage = () => {
    const data = useStaticQuery(query);
    
    return (
      <>
        <NavContainer>
          <NavBar>
            <IconWrapper>
              <HomeIcon />
            </IconWrapper>
            <IconWrapper>
              <BlogIcon />
            </IconWrapper>
          </NavBar>
          <LogoBar>
            <Logo />
          </LogoBar>
        </NavContainer>
        <ImageWrapper>
          <Img fluid={data.fileName.childImageSharp.fluid} />
          <SubTitle><span>Risk.</span> Analysis. Insight.</SubTitle>
        </ImageWrapper>
        {/* <VertNavWrapper>
                <VertNav>
                    Três
                </VertNav>
                <VertNav>
                    Imperials
                </VertNav>
                <VertNav>
                    Brigado
                </VertNav>
                <VertNav>
                    Fodasse
                </VertNav>
            </VertNavWrapper> */}
        <About />
        <Footer>
          <ContactColumn>
            <span>Writer:</span>
            <span>Ben Simonson</span>
            <span>42 Leeds road</span>
            <span>Ben@simonson.com</span>
          </ContactColumn>
          <ContactColumn>
            <span>Developer:</span>
            <span>Abai Edmund</span>
            <span>500 developer StraBe</span>
            <span>a@bai.edmund</span>
          </ContactColumn>
          <ContactColumn>
            <span>Developer:</span>
            <span>Danny Isaksen</span>
            <span>99 Big bucks street</span>
            <span>Disaksen@isaksen.com</span>
          </ContactColumn>
        </Footer>
      </>
    )
     
}

export default Homepage;