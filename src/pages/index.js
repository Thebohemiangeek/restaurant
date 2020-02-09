import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from "../utils"
import img from "../images/bcg/homeBcg.jpeg"
import QuickInfo from "../components/HomePage/QuickInfo"
import Gallery from "../components/HomePage/Gallery"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="Toomalie Day" subtitle="Magical street 11, London">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
