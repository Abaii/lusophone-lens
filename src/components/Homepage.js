import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby';

const NavContainer = styled.div`
    height: 240px;

`
const NavBar = styled.div`
    height: 119px;
    display: flex;
    justify-content: flex-end;
    padding: 17px;
`;
const LogoBar = styled.div`
    height: 119px;
    display: flex;
    justify-content: flex-start;
    padding-top: 20px;
    padding-bottom: 20px;
`;
const Icons = styled.div`
    width: 30px;
    height: 30px; 
    color: black;
    border-radius: 50%;
    border: 1px solid black;    
    margin: 20px;
`;

const Logo = styled.h2`
    height: 75px;
    color: black;
    margin: 15px;
    font-size: 45px;
`;

const ImageWrapper = styled.div`
    padding-right: 240px;
    margin-left: -20px;
   
`

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
 margin-top: -70px;
 position: absolute;
 width:500px;
 right: 500px;
`
const VertNavWrapper = styled.div`
 border: 1px solid black;
 display: flex;
 flex-direction: column;

`
const VertNav = styled.h2`
 font-size: 47px;
 color: black;
`

const Homepage = () => {
    const data = useStaticQuery(query);

    return (
        <>
            <NavContainer>
                <NavBar>
                    <Icons></Icons>
                    <Icons></Icons>
            </NavBar>
            <LogoBar>
                <Logo>
                    Lusophone Lens
                </Logo>
            </LogoBar>
            
            </NavContainer>
            <ImageWrapper>
                <Img 
                    fluid={data.fileName.childImageSharp.fluid} 
                />
                <SubTitle>
                Bemvindo Caralho, Fodasse
                </SubTitle>
            </ImageWrapper>
            <VertNavWrapper>
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
            </VertNavWrapper>
        </>
    )
     
}

export default Homepage;