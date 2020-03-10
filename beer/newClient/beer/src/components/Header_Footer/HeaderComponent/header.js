import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
    <Navbar>
      <Navbar.Brand href="/">BreweryDB Project</Navbar.Brand>
      {/* <Nav.Link href="/about">About</Nav.Link> */}
      <Nav className="mr-auto" >
        <NavDropdown title="Breweries and Beers" id="dropdown" >
          <NavDropdown.Item href = "/breweries" >Breweries</NavDropdown.Item>
          <NavDropdown.Item href = "/beers" >Beers</NavDropdown.Item>
          <NavDropdown.Divider/>
        </NavDropdown>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Nav>
    </Navbar>
    );
};

export default Header;