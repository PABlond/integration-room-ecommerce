import React from "react"

import Img from "gatsby-image"
import styled from "styled-components"

import { Icons } from "../../components"
import { colors, useSlider } from "../../utils"
import { SliderPagination } from "./Pagination"

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  .img-container {
    position: relative;
    width: 58.333%;

    .img-mobile {
      display: none;
    }

    .pagination-container {
      display: none;
    }
  }

  .pagination-container {
    position: absolute;

    bottom: 0;
    left: 58.333%;
  }

  .content-container {
    position: relative;
    width: 41.6666%;

    h1,
    p,
    a {
      margin: 0;
      padding: 0 6.25rem;

      @media (max-width: 990px) {
        padding-left: 2.375rem;
        padding-right: 2.375rem;
      }
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 1.75rem;

      @media (max-width: 990px) {
        margin-top: 4.5rem;
      }
    }

    p {
      line-height: 1.7;
      color: ${colors.darkGray};
      margin-bottom: 1.75rem;

      @media (max-width: 990px) {
        margin-bottom: 3.75rem;
      }
    }

    a {
      text-transform: uppercase;
      letter-spacing: 11px;
      color: ${colors.black};
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: 0.5s;

      @media (max-width: 990px) {
        margin-bottom: 4.75rem;
      }

      svg {
        margin-left: 3rem;

        @media (max-width: 1280px) {
          margin-left: 2rem;
        }

        @media (max-width: 768px) {
          margin-left: 3rem;
        }

        path {
          transition: 0.5s;
          stroke-width: 0;
        }
      }

      &:visited {
        color: ${colors.black};
      }

      &:hover {
        color: ${colors.darkGray};

        svg {
          path {
            fill: ${colors.darkGray};
          }
        }
      }
    }
  }

  @media (max-width: 990px) {
    display: block;

    .img-container,
    .content-container {
      width: 100%;
    }

    .content-container {
      h1 {
        font-size: 1.3125rem;
      }
    }

    .img-container {
      .img-desktop {
        display: none;
      }

      .img-mobile {
        display: block;
      }

      .pagination-container {
        display: flex;
        position: absolute;
        bottom: 0;
        right: 0;
        left: auto;
        top: auto;
      }
    }

    .pagination-container {
      display: none;
    }
  }
`

export const SliderLayout = () => {
  const {
    data: { data, selected },
  } = useSlider()

  const { imgFluid, imgFluidMobile, title, text } = data[selected]
  console.log(imgFluidMobile)
  return (
    <Row>
      <div className="img-container">
        <Img className="img-desktop" fluid={imgFluid} />
        <Img className="img-mobile" fluid={imgFluidMobile} />
        <SliderPagination />
      </div>
      <div className="content-container">
        <h1>{title}</h1>
        <p>{text}</p>
        <a href="#">
          Shop now <Icons.BigArrow />
        </a>
      </div>

      <SliderPagination />
    </Row>
  )
}
