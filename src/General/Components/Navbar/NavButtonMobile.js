import React from 'react';
import { FaBars } from 'react-icons/fa';
import { NavButton, NavMenu, NavItem } from './NavbarElements';

export default class NavButtonMobile extends React.Component {
  state = {
    isToggled: false
  };

  toggleMenu() {
    this.setState({ isToggled: !this.state.isToggled });
  }

  render() {
    const isToggled = this.state.isToggled;

    return (
      <>
        <NavButton onClick={() => this.toggleMenu()}>
          <FaBars />
        </NavButton>

        {isToggled && (
          <NavMenu onClick={() => this.toggleMenu()}>
            <NavItem href='/'>
              Home
            </NavItem>
            <NavItem>
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
        )}
      </>
    );
  }
}
