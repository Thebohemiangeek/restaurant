import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeaderHero, Banner } from "../utils"
import { graphql } from "gatsby"
const About = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeaderHero img={data.aboutBcg.childImageSharp.fluid}>
      <Banner title="about us"></Banner>
    </HeaderHero>
  </Layout>
)

export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "bcg/aboutBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default About
