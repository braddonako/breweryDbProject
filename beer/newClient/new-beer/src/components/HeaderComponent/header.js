import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
    <Navbar>
      <Navbar.Brand href="/">BreweryDB Project</Navbar.Brand>
      <Nav className="mr-auto">
        <NavDropdown title="Breweries and Beers" id="collasible-nav-dropdown">
          <NavDropdown.Item href = "/about" >About this App</NavDropdown.Item>
          <NavDropdown.Item href = "/" >Breweries</NavDropdown.Item>
          <NavDropdown.Item href = "/" >Beers</NavDropdown.Item>
          <NavDropdown.Divider/>
        </NavDropdown>
      </Nav>
    </Navbar>
    );
};

export default Header;