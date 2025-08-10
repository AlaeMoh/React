"use client"
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../assets/pizzaLogo.png";
import { useRouter } from "next/navigation";


export default function Navbarlayout() {
  const router= useRouter()
  const goHome= ()=>{
    router.push("/")
  }

  return (

 <Navbar expand="lg" className="navbar">
      <Container fluid>

        <Navbar.Brand ><img className="logo" src={Logo.src} alt="Logo" />

</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' onClick={goHome}>Home</Nav.Link>
            <Nav.Link  className='text-white' href="/Menu">Menu </Nav.Link>
            <Nav.Link className='text-white' href="#action2">About  </Nav.Link>
            <Nav.Link className='text-white' href="#">
              Contact  
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger"  className='text-white'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
