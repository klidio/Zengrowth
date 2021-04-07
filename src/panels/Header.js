import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import {Link} from 'react-router-dom'
import logo from '../img/log1.png'
import {BiSearch} from 'react-icons/bi'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header container">
      <Navbar light expand="md">
        <NavbarBrand href="/">
            <img src={logo} /> 
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/blog'>Blog</NavLink>
            </NavItem>
            <NavItem>
              <Link to="/">
            <Button style={{backgroundColor:"#000066"}} >Get Started</Button>
            </Link>
            </NavItem>
            <NavItem>
              <BiSearch size="1.5rem"/>
              {/* <input
        className='searchbox'
        type='search'
        size='0'
       /> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;