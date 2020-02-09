import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeaderHero, Banner } from "../utils"
import { graphql } from "gatsby"

const Menu = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeaderHero img={data.menuBcg.childImageSharp.fluid}>
      <Banner title="our menu" />
    </HeaderHero>
  </Layout>
)
export const query = graphql`
  query {
    menuBcg: file(relativePath: { eq: "bcg/menuBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Menu
