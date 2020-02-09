import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import contactBcg from "../images/bcg/contactBcg.jpeg"

const Contact = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={contactBcg}>
      <Banner title="contact us" />
    </PageHeader>
  </Layout>
)

export default Contact
