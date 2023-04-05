import React from 'react'
import { Bar, NavMenu, NavItem, NavLogo } from './NavbarElements.js'
import NavButtonMobile from './NavButtonMobile.js'
import mLogo from '../../Images/mLogo.png'
import dLogo from '../../Images/dLogo.png'

export default function Navbar() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 720;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Bar>
      
      {width < breakpoint ? <NavLogo src={mLogo} /> : <NavLogo src={dLogo} /> }

      {width < breakpoint ? <NavButtonMobile /> :
        <NavMenu>
          <NavItem
            href='/'
            activeClass='active'
            smooth
            spy
            to='home'
          >
            Get Started
          </NavItem>
          <NavItem
            activeClass='active'
            smooth
            spy
            to='learn_more'
          >
            Our Service
          </NavItem>
        </NavMenu>
      }
    </Bar>
  )
}