import React from "react"
import Layout from "../components/layout"
import BlogPost from "../components/BlogPost/BlogPost";
import { graphql } from 'gatsby';

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <BlogPost data={data}/>
    </Layout>
  )
}


export default BlogPostTemplate;

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
`;