import styled from 'styled-components';
import { Link as LinkS } from "react-scroll";

export const Bar = styled.nav`
  /*mobile*/
  position: fixed;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  background: #1f1e1f;
  opacity: 0.99;

  border-bottom: 1.5px solid #1a191a;

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
  font-size: 2rem;
  margin-right: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1f1e1f;

  border: none;
`;

export const NavMenu = styled.div`
  /*mobile*/
  position: absolute;
  width: 99.5vw;
  display: flex;
  flex-direction: column;
  top: 12vh;
  background: #1f1e1f;

  border: 1.5px solid #1a191a;
  
  @media only screen and (min-width: 720px) {
    /*desktop*/
    position: static;
    width: 75%;
    height: 100%;
    flex-direction: row;
    margin-top: 0vh;
    justify-content: end;

    border: none;
  }
`;

export const NavItem = styled(LinkS)`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: #ebe6f0;
  border-top: 1.5px solid #1a191a;

  :hover {
    background: #3c3a3c;
  }

  :link { text-decoration: none; }
  :visited { text-decoration: none; }
  :hover { text-decoration: none; }
  :active { text-decoration: none; }

  @media only screen and (min-width: 720px) {
    /*desktop*/
    width: 12vw;
    height: 100%;
    border-left: 1.5px solid #1a191a;
  }
`;

export const NavLogo = styled.img`
  /*mobile*/
  height: 80%;
  margin-left: 8vw;

  @media only screen and (min-width: 720px) {
    /*desktop*/
    height: 80%;
    margin-left: 4vw;
  }
`;