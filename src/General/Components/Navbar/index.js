import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Bar, Name, NavMenu, NavItem } from './NavbarElements.js'
import NavButtonMobile from './NavButtonMobile.js'

export default function Navbar() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 720;
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Bar>
      <Name href='/'>
        Motor Sauce
      </Name>

      {/* If mobile render opt1 else render opt2 */}
      {width < breakpoint ? <NavButtonMobile /> :
        <NavMenu>
          <NavItem
            href='/'
            activeClass='active'
            smooth
            spy
            to='home'
          >
            Home
          </NavItem>

          {!isAuthenticated
            ?
            <NavItem
              onClick={() => loginWithRedirect()}
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
          >
            Learn More
          </NavItem>
          <NavItem>
            Contact Us
          </NavItem>

          {!isAuthenticated
            ?
            null
            :
            <NavItem
              onClick={() => logout()}
            >
              Logout
            </NavItem>
          }

        </NavMenu>
      }

    </Bar>
  )
}
