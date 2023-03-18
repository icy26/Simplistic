import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";

export const Bar = styled.nav`
  /*mobile*/
  position: fixed;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  
  z-index: 2;

  background: #C0C0C0;
  opacity: 0.9;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    width: 100%;
    height: 10vh;
  }
`;

export const Name = styled.a`

`

export const NavButton = styled.button`
  /*mobile*/
  height: 60%;
  aspect-ratio: 1 / 1;
  font-size: 1.6rem;

  border: 2px solid #0000FF;
  
`;

export const NavMenu = styled.div`
  /*mobile*/
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 12vh;
  border: 1px solid #0000FF;
  
  @media only screen and (min-width: 720px) {
    /*desktop*/
    position: static;
    width: 75%;
    height: 100%;
    flex-direction: row;
    margin-top: 0vh;
    justify-content: end;
  }
`;

export const NavItem = styled(LinkS)`
  width: 100%;
  height: 10vh;
  border: 1px solid #008000;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    width: 12vw;
    height: 100%;
  }
`;