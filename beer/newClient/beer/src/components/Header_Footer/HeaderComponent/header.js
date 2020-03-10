import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
    <Navbar>
      <Navbar.Brand href="/" style={{color: 'dodgerblue'}}>BreweryDB Project</Navbar.Brand>
      {/* <Nav.Link href="/about">About</Nav.Link> */}
      <Nav className="mr-auto" style={{color: 'dodgerblue'}}>
        <NavDropdown title="Breweries and Beers" id="basic-nav-dropdown" >
          <NavDropdown.Item href = "/breweries" >Breweries</NavDropdown.Item>
          <NavDropdown.Item href = "/beers" >Beers</NavDropdown.Item>
          <NavDropdown.Divider/>
        </NavDropdown>       
      </Nav>
      <Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="primary">Search</Button>
        </Form>
      </Nav>
    </Navbar>
    );
};

export default Header;