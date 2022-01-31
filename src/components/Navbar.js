import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/shared/logo.svg'
import { ReactComponent as Menu } from '../assets/shared/icon-hamburger.svg'
import { ReactComponent as Close} from '../assets/shared/icon-close.svg'
import styled from 'styled-components';
import { useState } from 'react';

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(!nav);

  return (
    <Nav>
      <Logo />
      <LinksContainer className={nav && 'nav'}>
        <NavLink to={'/'}>
          <span>00</span> Home
        </NavLink>
        <NavLink to={'/destination'}>
          <span>01</span> Destination
        </NavLink>
        <NavLink to={'/crew'}>
          <span>03</span> Crew
        </NavLink>
        <NavLink to={'/technology'}>
          <span>04</span> Technology
        </NavLink>
        <CloseIcon onClick={openNav} />
      </LinksContainer>
      <MenuIcon onClick={openNav}/>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  //position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 0 1em 2em;

  @media (max-width: 768px) {
    padding: 0 0 1em 2em;
    img {
      width: 40px;
    }
  }
  @media (max-width: 450px) {
    padding: 1em 2em;
    img {
      width: 40px;
    }
  }
  
  .nav {
    display: flex;
  }
`;

const LinksContainer = styled.div`
  position: relative;
  z-index: 1;
  flex-basis: 700px;
  background-color: var(--nav);
  display: inherit;
  justify-content: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    flex-basis: 0;
  }

  @media (max-width: 450px) {
    display: none;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    width: 250px;
    height: 100%;
    justify-content: flex-start;
    padding-top: 5em;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: var(--white);
  padding: 1.5em 1.5rem;
  text-decoration: none;    
  font-family: 'Barlow Condensed', sans-serif;
  
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--white);
    height: 2px;
    width: 100%;
    display: ${({activeClassName}) => activeClassName ? 'block': 'none'};
  }
  
  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      background-color: var(--white);
      height: 2px;
      width: 100%;
      display: block;
    }
  }
  
  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
  @media (max-width: 450px) {
    span {
      display: inline-block; 
    }
    padding: 1em 1.5rem;
    font-size: 18px;
  }
`;

const MenuIcon = styled(Menu)`
  display: none;
  width: 25px !important;
  @media (max-width: 450px) {
    display: block;
  }
`;

const CloseIcon = styled(Close)`
  display: none;
  width: 20px !important;
  @media (max-width: 450px) {
    display: block;
    position: absolute;
    top: 1em;
    right: 1em;
  }
`;