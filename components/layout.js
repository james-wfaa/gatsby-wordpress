import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import FilledHelmet from './FilledHelmet'

import Header from "./Header"
import Footer from "./Footer"

import "./layout.css"

const Layout = ({ children, img, url, excerpt }) => {
  
  return (
    <>
    <FilledHelmet
      title="Wisconsin Alumni Association"
      img={img}
      url={url}
      desc={excerpt} 
      />
      <Header />
      <div>
        <Link to="/">home menu</Link>
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
