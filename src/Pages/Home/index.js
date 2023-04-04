import React from 'react'
import { Container, Slogan, BodyContainer, BodyWindow, OptionContainer, Option, Pad, Square, Triangle, Flex } from './HomeElements'
import ContactForm from '../../General/Components/ContactForm'

export default function Home() {

  return (
    <Container
      id='home'
    >

      <Slogan>
        SIMPLISTIC
      </Slogan>
      
        <Square
          style={{zIndex: '0'}}
        />
        <Triangle
          style={{zIndex: '0'}}
        />

        <div style={{position: 'absolute', width: '100vw'}}>
        <BodyContainer
          style={{zIndex: '1'}}
        >
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
      </div>

      {/* Pad used for scrolling */}
      <Pad
        id='learn_more'
      />

    </Container>
  )
}
