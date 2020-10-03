import React from "react"

import styled from "styled-components"

import { Icons } from "../../components"
import { colors } from "../../utils"
import { useSlider } from "../../utils"

const Container = styled.div`
  display: flex;

  svg {
    background: ${colors.black};
    cursor: pointer;
    transition: 0.5s;

    path {
      stroke: ${colors.white};
      transform: translate(35%, 35%);
    }

    &:hover {
      background: ${colors.veryDarkGray};
      stroke: ${colors.veryDarkGray};
    }
  }

  @media (max-width: 1280px) {
  }

  @media (max-width: 990px) {
    top: 356px;
    right: 0;
    left: auto;
  }
`

export const SliderPagination = () => {
  const {
    data: { selected, data },
    setSelected,
  } = useSlider()

  const selectData = (number: number) => {
    if (number >= 0 && number < data.length) setSelected(number)
  }

  return (
    <Container className="pagination-container">
      <Icons.ArrowLeft onClick={() => selectData(selected - 1)} />
      <Icons.ArrowRight onClick={() => selectData(selected + 1)} />
    </Container>
  )
}
