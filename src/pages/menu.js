import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import menuBcg from "../images/bcg/menuBcg.jpeg"

const Menu = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={menuBcg}>
      <Banner title="our menu" />
    </PageHeader>
  </Layout>
)

export default Menu
