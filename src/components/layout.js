import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import { createGlobalStyle } from "styled-components"
import Navbar from "./globals/navbar/Navbar"
import Footer from "./globals/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
