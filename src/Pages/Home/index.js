import React from 'react'
import { Container, Slogan, OptionContainer, Option, Pad } from './HomeElements'
import Carousel from '../../General/Components/Carousel'

export default function Home() {

  return (
    <Container
      id="home"
    >
      <Slogan>
        SLOGAN
      </Slogan>

      <Carousel />

      <OptionContainer>
        <Option
          activeClass="active" 
          smooth
          spy
          to="get_started"
        >
          Get Started
        </Option>
        <Option>
          Learn More
        </Option>
      </OptionContainer>

      <Pad
        // ref={myRef}
        id="get_started"
      />
    </Container>
  )
}
