import React from "react"

import styled from "styled-components"

import { useSlider } from "../../utils"
import { SliderLayout } from "./Layout"

const Container = styled.section`
  position: relative;
`

export const Slider = () => {
  console.log(useSlider())
  return (
    <>
      <Container>
        <SliderLayout />
      </Container>
    </>
  )
}
