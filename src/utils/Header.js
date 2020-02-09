import styled from "styled-components"
import React from "react"
import BackgroundImage from "gatsby-background-image"

function HeaderHeroBanner({ img, children, home }) {
  return (
    <BackgroundImage fluid={img} home={home} className="hero">
      {children}
    </BackgroundImage>
  )
}

export const HeaderHero = styled(HeaderHeroBanner)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
`
