import React from "react"
import Product from "./Product"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Section, Title, SectionButton } from "../../utils"

const menuItems = graphql`
  {
    items: allContentfulMenu {
      edges {
        node {
          name
          ingredients
          price
          image {
            fixed(width: 150, height: 150) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`

const Menu = () => {
  const data = useStaticQuery(menuItems)
  const products = data.items.edges

  return (
    <Section>
      <Title title="our food" message="fresh from the market" />
      <ProductList>
        {products.map(item => {
          return <Product key={item.node.id} product={item.node} />
        })}
      </ProductList>
    </Section>
  )
}
const ProductList = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 3rem;
  @media (min-width: 576px) {
    grid-template-columns: 95%;
  }
  @media (min-width: 776px) {
    grid-template-columns: 80%;
    justify-content: center;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`
export default Menu
