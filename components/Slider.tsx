'use client'
import React, { ReactNode } from 'react'
import { Carousel } from './ui/carousel'
import Autoplay from "embla-carousel-autoplay"
export default function Slider({children}:{children:ReactNode}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({

          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      {children}
      </Carousel>
  )
}
