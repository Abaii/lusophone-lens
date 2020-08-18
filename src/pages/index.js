import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BlogPost from '../components/BlogPost/BlogPost'
import Homepage from '../components/Homepage';
import About from '../components/About';

const IndexPage = () => (
  <Layout>
    <About/>
  </Layout>
)

export default IndexPage
