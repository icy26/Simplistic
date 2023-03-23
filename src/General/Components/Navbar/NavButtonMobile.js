import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavButton, NavMenu, NavItem } from './NavbarElements';

import { useAuth0 } from '@auth0/auth0-react';

export default function NavButtonMobile() {

  const [isToggled, setIsToggled] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
        <NavButton onClick={() => setIsToggled(!isToggled)}>
          <FaBars />
        </NavButton>

        {isToggled && (
          <NavMenu>
            <NavItem
              href='/'
              activeClass='active'
              smooth
              spy
              to='home'
              onClick={() => setIsToggled(!isToggled)}
            >
              Home
            </NavItem>

            {!isAuthenticated
              ?
              <NavItem
                // Calls 2 functions in 1 click 
                onClick={() => {setIsToggled(!isToggled); loginWithRedirect()}}
              >
                Get Started
              </NavItem>
              :
              null
            }

            <NavItem
              activeClass='active'
              smooth
              spy
              to='learn_more'
              onClick={() => setIsToggled(!isToggled)}
            >
              Learn More
            </NavItem>
            <NavItem
              onClick={() => setIsToggled(!isToggled)}
            >
              Contact Us
            </NavItem>

            {!isAuthenticated
              ?
              null
              :
              <NavItem
                // Calls 2 functions in 1 click 
                onClick={() => {setIsToggled(!isToggled); logout()}}
              >
                Log Out
              </NavItem>
            }

          </NavMenu>
        )}
      </>
  );
}