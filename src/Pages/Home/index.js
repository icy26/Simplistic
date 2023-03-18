import React from 'react'
import { Container, Slogan, OptionContainer, Option, LoggedInOptionContainer, LoggedInOption, Pad } from './HomeElements'

import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {

  const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();

  return (
    <Container
      id='home'
    >
      <Slogan>
        SIMPLISTIC
      </Slogan>

      {isAuthenticated
        ?
        <LoggedInOptionContainer>
          <LoggedInOption
            activeClass='active'
            smooth
            spy
            to='learn_more'
          >
            Learn More
          </LoggedInOption>
        </LoggedInOptionContainer>
        :
        <OptionContainer>
          <Option
            onClick={() => loginWithRedirect()}
          >
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
      }

      {/* Pad used for scrolling */}
      <Pad
        id='learn_more'
      />

    </Container>
  )
}
