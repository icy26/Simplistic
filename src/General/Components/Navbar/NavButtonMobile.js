import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavButton, NavMenu, NavItem } from './NavbarElements';

export default function NavButtonMobile() {

  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
        <NavButton onClick={() => setIsToggled(!isToggled)}>
          <FaBars style={{color: "#f0f8ff"}}/>
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
              Get Started
            </NavItem>
            <NavItem
              activeClass='active'
              smooth
              spy
              to='learn_more'
              onClick={() => setIsToggled(!isToggled)}
            >
              Our Service
            </NavItem>
          </NavMenu>
        )}
      </>
  );
}