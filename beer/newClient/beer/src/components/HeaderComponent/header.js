import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
    <Navbar style={{backgroundColor: '#E66767', color: 'white', textTransform: 'uppercase', padding: '15px', opacity: '.9'}}>
      <Navbar.Brand href="/">BreweryDB Project</Navbar.Brand>
      <Nav className="mr-auto">
        <NavDropdown title="Stuff" id="collasible-nav-dropdown">
          <NavDropdown.Item href = "/about" >About this App</NavDropdown.Item>
          <NavDropdown.Divider/>
        </NavDropdown>
      </Nav>
    </Navbar>
    );
};

export default Header;