import Carousel from 'react-multi-carousel'
import { ResponsiveType } from 'react-multi-carousel/lib/types'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'

const BreakpointSlides: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 530 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 1,
  },
}

export default function HomePageImageSlider() {
  return (
    <Carousel
      responsive={BreakpointSlides}
      ssr
      infinite
      itemClass="carousel-item"
      autoPlay
    >
      <Image
        alt=""
        src="/images/ChildCare1.jpeg"
        priority
        layout="responsive"
        width={700}
        height={600}
      />
      <Image
        alt=""
        src="/images/SeniorCare1.jpeg"
        priority
        layout="responsive"
        width={700}
        height={600}
      />
      <Image
        alt=""
        src="/images/HouseCleaning1.jpeg" 
        priority
        layout="responsive"
        width={700}
        height={600}
      />
      <Image
        alt=""
        src="/images/PetCare1.jpeg"
        layout="responsive"
        width={700}
        height={600}
      />
      <Image
        alt=""
        src="/images/Laundry1.jpeg"
        layout="responsive"
        width={700}
        height={600}
      />
    </Carousel>
  )
}
