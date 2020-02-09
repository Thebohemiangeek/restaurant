import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeaderHero, Banner } from "../utils"
import { graphql } from "gatsby"

const Contact = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeaderHero img={data.contactBcg.childImageSharp.fluid}>
      <Banner title="contact us" />
    </HeaderHero>
  </Layout>
)
export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "bcg/contactBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Contact
