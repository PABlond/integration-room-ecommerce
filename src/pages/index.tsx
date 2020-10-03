import React from "react"

import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import styled, { createGlobalStyle } from "styled-components"

import { About, Nav, Slider } from "../containers"
import {
  SliderContext,
  initSliderContext,
  getInitialData,
  useSlider,
  Types,
} from "../utils"

const GlobalStyle = createGlobalStyle`
html,body{
  overflow-x: hidden;
}

  body {
    margin: 0;
    font-family: 'Spartan', sans-serif;
    font-size: 12px;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    max-width: 1440px;
  }
`

const PageContent = () => {
  const {
    data: { selected, data },
    setSelected,
  } = useSlider()

  const onKeyDown = ({ keyCode }: { keyCode: number }): void => {
    if (keyCode === 37 && selected - 1 >= 0 && selected - 1 < data.length)
      setSelected(selected - 1)

    if (keyCode === 39 && selected + 1 >= 0 && selected + 1 < data.length)
      setSelected(selected + 1)
  }

  return (
    <Container onKeyDown={onKeyDown} tabIndex={0}>
      <div className="container">
        <Nav />
        <Slider />
        <About />
      </div>
    </Container>
  )
}

export default ({
  data: {
    site,
    img1: {
      childImageSharp: { fluid: img1fluid },
    },
    img1Mobile: {
      childImageSharp: { fluid: img1fluidMobile },
    },
    img2: {
      childImageSharp: { fluid: img2fluid },
    },
    img2Mobile: {
      childImageSharp: { fluid: img2fluidMobile },
    },
    img3: {
      childImageSharp: { fluid: img3fluid },
    },
    img3Mobile: {
      childImageSharp: { fluid: img3fluidMobile },
    },
  },
}: {
  data: {
    site: Types.Site
    img1: {
      childImageSharp: { fluid: Types.ImageSharpFluid }
    }
    img1Mobile: {
      childImageSharp: { fluid: Types.ImageSharpFluid }
    }
    img2: {
      childImageSharp: { fluid: Types.ImageSharpFluid }
    }
    img2Mobile: {
      childImageSharp: { fluid: Types.ImageSharpFluid }
    }
    img3: {
      childImageSharp: { fluid: Types.ImageSharpFluid }
    }
    img3Mobile: {
      childImageSharp: { fluid: Types.ImageSharpFluid }
    }
  }
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const initialData = getInitialData({
    img1fluid,
    img1fluidMobile,
    img2fluid,
    img2fluidMobile,
    img3fluid,
    img3fluidMobile,
  })

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@500&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        <link rel="canonical" href="https://www.pablond.com" />
      </Helmet>
      <SliderContext.Provider value={initSliderContext(initialData)}>
        <PageContent />
      </SliderContext.Provider>
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    img1: file(relativePath: { eq: "desktop-image-hero-1.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img1Mobile: file(relativePath: { eq: "mobile-image-hero-1.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "desktop-image-hero-2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2Mobile: file(relativePath: { eq: "mobile-image-hero-2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "desktop-image-hero-3.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 840) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3Mobile: file(relativePath: { eq: "mobile-image-hero-3.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
