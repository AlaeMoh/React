
import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand className='text-white' href="#">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' href="#action1">Home</Nav.Link>
            <Nav.Link className='text-white' href="#action2">Cart</Nav.Link>
            <NavDropdown className='text-white' title="Link" id="navbarScrollingDropdown" >
              <NavDropdown.Item className='text-white' href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item  href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-white' href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='text-white' href="#" >
              Sign In
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='text-white'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <main>
      <Container>
        <Outlet/>
      </Container>
    </main>
    </div>
  );
}

export default App;
