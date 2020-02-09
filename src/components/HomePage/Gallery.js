import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Section } from "../../utils"
import Img from "gatsby-image"

const responseImage = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Gallery = () => {
  const response = useStaticQuery(responseImage)
  const images = response.getImages.edges

  return (
    <Section>
      <GalleryWrapper>
        {images.map(({ node }, index) => {
          return (
            <div key={index} className={`item item-${index + 1}`}>
              <Img fluid={node.childImageSharp.fluid} className="img" />
              <p className="info">Food for your imagination</p>
            </div>
          )
        })}
      </GalleryWrapper>
    </Section>
  )
}
const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;

  .item {
    position: relative;
  }
  .img {
    border-radius: 5px;
  }
  .info {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 24px;
    border-radius: 3px;
    border-bottom-left-radius: 0px;
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "one one two two"
      "one one three three";
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 100%;
    }
    grid-template-areas:
      "one one two two"
      "one one three three";

    .item-1 {
      grid-area: one;
    }
    .item-2 {
      grid-area: two;
    }
    .item-3 {
      grid-area: three;
    }
  }
`
export default Gallery
