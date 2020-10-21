import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';


const query = graphql`
    query {
        allFile ( filter: {
            extension: {regex: "/(jpg)/"}
            sourceInstanceName: {eq:"images"}})
        {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 1000, maxHeight: 1000) {
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
    return (
      <Container>
            <Img fluid={edges[1].node.childImageSharp.fluid} />
      </Container>
    )
};

export default Carousel;