import React from 'react'
import { Container, Slogan, OptionContainer, Option, Pad } from './HomeElements'
import { LoginButton, LogoutButton } from '../../General/Auth/LoginLogoutButton'

export default function Home() {

  return (
    <Container
      id='home'
    >
      <Slogan>
        SIMPLISTIC
      </Slogan>

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

      <LoginButton />
      <LogoutButton />

      {/* Pad used for scrolling */}
      <Pad
        id='learn_more'
      />

    </Container>
  )
}
