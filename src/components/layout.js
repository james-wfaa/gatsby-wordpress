import React from "react"
import PropTypes from "prop-types"

import FilledHelmet from './FilledHelmet'

import Header from "./header"
import Footer from "./Footer"

import "./layout.css"

const Layout = ({ children, img, url, excerpt, noborder, title }) => {
  
  return (
    <>
    <FilledHelmet
      title={title}
      img={img}
      url={url}
      desc={excerpt} 
      />
      <Header noborder={noborder} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
