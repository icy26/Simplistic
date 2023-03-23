import React from 'react'
import { Container, Slogan, BodyContainer, BodyWindow, OptionContainer, Option, Pad } from './HomeElements'

export default function Home() {

  return (
    <Container
      id='home'
    >
      <Slogan>
        SIMPLISTIC
      </Slogan>

      <BodyContainer>
        <BodyWindow>

        </BodyWindow>
        <BodyWindow>

        </BodyWindow>
      </BodyContainer>

        <OptionContainer>
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
