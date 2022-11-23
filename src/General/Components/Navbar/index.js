import React from 'react'
import {Bar, Name, NavMenu, NavItem} from './NavbarElements.js'
import NavButtonMobile from './NavButtonMobile.js'

export default function Navbar() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 720;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
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
            activeClass="active" 
            smooth
            spy
            to="home"
          >
            Home
          </NavItem>
          <NavItem 
            activeClass="active" 
            smooth
            spy
            to="get_started"
          >
            Get Started
          </NavItem>
          <NavItem>
            The Process
          </NavItem>
          <NavItem>
            Reviews
          </NavItem>
          <NavItem>
            Contact Us
          </NavItem>
        </NavMenu>
      }
      
    </Bar>
  )
}
