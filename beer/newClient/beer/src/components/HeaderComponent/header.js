import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
    <Navbar>
      <Navbar.Brand href="/">BreweryDB Project</Navbar.Brand>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav className="mr-auto">
        <NavDropdown title="Breweries and Beers" id="collasible-nav-dropdown">
          <NavDropdown.Item href = "/breweries" >Breweries</NavDropdown.Item>
          <NavDropdown.Item href = "/beers" >Beers</NavDropdown.Item>
          <NavDropdown.Divider/>
        </NavDropdown>
      </Nav>
    </Navbar>
    );
};

export default Header;