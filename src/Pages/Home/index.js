import React from 'react'
import { Container, Slogan, OptionContainer, Option, Pad } from './HomeElements'
// import Carousel from '../../General/Components/Carousel'

export default function Home() {

  return (
    <Container
      id='home'
    >
      <Slogan>
        SIMPLISTIC
      </Slogan>

      {/* <Carousel /> */}

      <OptionContainer>
        <Option>
          Get Started
        </Option>
        <Option
          activeClass='active' 
          smooth
          spy
          to='learn_more'
        >
          Learn More
        </Option>
      </OptionContainer>

      {/* Pad used for scrolling */}
      <Pad
        id='learn_more'
      />

    </Container>
  )
}
