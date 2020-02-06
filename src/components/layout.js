import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
/* import "./bootstrap.min.css"  */
import { createGlobalStyle } from "styled-components"
import Navbar from "./globals/navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
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
