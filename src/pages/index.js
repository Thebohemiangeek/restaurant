import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeaderHero, Banner, BannerButton } from "../utils"
import QuickInfo from "../components/HomePage/QuickInfo"
import Gallery from "../components/HomePage/Gallery"
import Menu from "../components/HomePage/Menu"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeaderHero img={data.file.childImageSharp.fluid} home="true">
      <Banner title="Toomalie Day" subtitle="Magical street 11, London">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HeaderHero>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "bcg/homeBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
