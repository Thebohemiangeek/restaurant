import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import aboutBcg from "../images/bcg/aboutBcg.jpeg"

const About = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={aboutBcg}>
      <Banner title="about us"></Banner>
    </PageHeader>
  </Layout>
)

export default About
