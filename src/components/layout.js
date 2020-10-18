/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Navbar from "./Navbar";
import Footer from './Footer';

const Layout = ({ children }) => {

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          padding: `0 60px`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Navbar/>
        <main style={{flex: '1'}}>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
