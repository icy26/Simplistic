import React from 'react'
import { Container, Slogan, OptionContainer, LoggedInOptionContainer, Option, LoggedInOption, LoginButton, Pad } from './HomeElements'

import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

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
          <LoginButton
            onClick={() => loginWithRedirect()}
          >
            Get Started
          </LoginButton>
          
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

      
      <LogoutButton />

      {/* Pad used for scrolling */}
      <Pad
        id='learn_more'
      />

    </Container>
  )
}
