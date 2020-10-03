import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { colors, Types } from "../../utils"

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .main-container {
    width: 38.75%;
    padding: 0 3rem;

    h1 {
      text-transform: uppercase;
      letter-spacing: 4px;
      font-weight: 600;
      font-size: 12px;
    }

    p {
      line-height: 1.7;
      color: ${colors.darkGray};
    }
  }

  .img-container {
    width: 30.625%;
  }

  @media (max-width: 990px) {
    display: block;

    .img-container {
      width: 100%;
    }

    .main-container {
      width: auto;
      padding: 0;

      h1,
      p {
        margin: 0 2.5rem;
      }

      h1 {
        margin-top: 3.8125rem;
        margin-bottom: 1.25rem;
      }

      p {
        margin-bottom: 3.8125rem;
      }className: string 
  }
`

export const About = () => {
  return (
    <Container>
      <StaticQuery
        query={graphql`
          query GetAboutImgs {
            img1: file(relativePath: { eq: "image-about-dark.jpg" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 840) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            img2: file(relativePath: { eq: "image-about-light.jpg" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 840) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={({
          img1: {
            childImageSharp: { fluid: img1Fluid },
          },
          img2: {
            childImageSharp: { fluid: img2Fluid },
          },
        }: {
          img1: {
            childImageSharp: Types.ImageSharp
          }
          img2: {
            childImageSharp: Types.ImageSharp
          }
        }) => {
          return (
            <>
              <div className="img-container">
                <Img fluid={img1Fluid as any} />
              </div>
              <div className="main-container">
                <h1>About our furniture</h1>
                <p>
                  Our multifunctional collection blends design and function to
                  suit your individual taste. Make each room unique, or pick a
                  cohesive theme that best express your interests and what
                  inspires you. Find the furniture pieces you need, from
                  traditional to contemporary styles or anything in between.
                  Product specialists are available to help you create your
                  dream space.
                </p>
              </div>
              <div className="img-container">
                <Img fluid={img2Fluid as any} />
              </div>
            </>
          )
        }}
      />
    </Container>
  )
}
