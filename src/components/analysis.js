import React from "react"
import Layout from "./layout"
import BlogPost from "./BlogPost/BlogPost";
import { graphql } from 'gatsby';

const Analysis = ({ data }) => {
  console.log(data);
  return (
  <Layout>
    <BlogPost data={data}/>
  </Layout>
)
}


export default Analysis;
export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: {eq: $id}) {
      title
      description
      content
      cover {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      url
    }
  }
`