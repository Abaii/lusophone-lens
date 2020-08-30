import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const Pdark = styled.p`
  color: black;
  font-size: 12px;
`;
const Plight = styled.p`
  color: white;
  font-size: 12px;
`;

const query = graphql`
    query {
        allFile ( filter: {
            extension: {regex: "/(jpg)/"}
            sourceInstanceName: {eq:"images"}})
        {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 2000, maxHeight: 1500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

const Container = styled.div`
  margin: 0 -100px;
`
const Carousel = () => {
    const data = useStaticQuery(query);
    const { edges } = data.allFile;
    console.log(edges)
    const settings = {
      dots: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <Container>
        
          <div>
            <Img fluid={edges[1].node.childImageSharp.fluid} />
          </div>
      </Container>
    )
};

export default Carousel;