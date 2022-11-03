import React from 'react'
import {Bar, Name, NavButton, NavMenu, NavItem} from './NavbarElements.js'
import NavButtonMobile from './NavButtonMobile.js'

export default function Navbar() {
  return (
    <Bar>
      <Name href='/'>
        Motor Sauce
      </Name>
      <NavButtonMobile />
      
      {/* <NavMenu /> */}
    </Bar>
  )
}
