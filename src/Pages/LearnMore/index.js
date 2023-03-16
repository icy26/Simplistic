import React from 'react'
import { Container, Title, Pad, Temp } from './LearnMoreElements'

export default function LearnMore() {

  return (
    <Container>

        <Title>
            Learn More
        </Title>

        <Temp
            activeClass='active' 
            smooth
            spy
            to='next'
        >
            Next
        </Temp>

        <Pad
            id='next'
        />

    </Container>
  )
}
