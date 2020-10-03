import { createContext, useContext, useState } from "react"

import * as Types from "./types"

export const SliderContext = createContext<InitSliderContextProps>(
  undefined as any
)

export const useSlider = () => {
  return useContext(SliderContext)
}

export const initSliderContext = (
  initialData: InitialData[]
): InitSliderContextProps => {
  const [data, setData] = useState({ data: initialData, selected: 0 })

  const setSelected = (selected: number): void => {
    setData({ ...data, selected })
  }

  return { data, setSelected }
}

export const getInitialData = ({
  img1fluid,
  img1fluidMobile,
  img2fluid,
  img2fluidMobile,
  img3fluid,
  img3fluidMobile,
}: {
  img1fluid: Types.ImageSharpFluid
  img1fluidMobile: Types.ImageSharpFluid
  img2fluid: Types.ImageSharpFluid
  img2fluidMobile: Types.ImageSharpFluid
  img3fluid: Types.ImageSharpFluid
  img3fluidMobile: Types.ImageSharpFluid
}): InitialData[] => [
  {
    imgFluid: img1fluid,
    imgFluidMobile: img1fluidMobile,
    title: "Discover innovative ways to decorate",
    text:
      "We provide unmatched quality, comfort, and style for property owners across the country.    Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    imgFluid: img2fluid,
    imgFluidMobile: img2fluidMobile,
    title: "We are available all across the globe",
    text:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    imgFluid: img3fluid,
    imgFluidMobile: img3fluidMobile,
    title: "Manufactured with the best materials",
    text:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
]

type InitialData = {
  imgFluid: Types.ImageSharpFluid | null | undefined
  imgFluidMobile: Types.ImageSharpFluid | null | undefined
  title: string
  text: string
}

type InitSliderContextProps = {
  data: any
  setSelected: (selected: number) => void
}
