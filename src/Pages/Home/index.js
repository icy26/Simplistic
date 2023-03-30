import React from 'react'
import { Container, Slogan, BodyContainer, BodyWindow, OptionContainer, Option, Pad, Flex } from './HomeElements'
import ContactForm from '../../General/Components/ContactForm'

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
          <Flex>
            Choose a home for your business with “Simplistic”
          </Flex>
          <Flex>
            We will build you state of the art website applications with your business and processes in mind
          </Flex>
        </BodyWindow>
        <BodyWindow> 
          <Flex>
            Register your interest
          </Flex>
          <ContactForm />
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
