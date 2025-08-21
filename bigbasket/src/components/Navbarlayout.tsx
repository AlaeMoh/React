"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/idIKsM8ZJJ_logos.png'
import Image from 'next/image';

export default function Navbarlayout() {
  return (
     <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="#"> <Image src={logo} width={50} height={50} alt={''}></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/category/groceries">groceries</NavDropdown.Item>
              <NavDropdown.Item href="/category/Electronics">
                Accesseries
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Clothings">
                clothing
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/Snacks">
                Snacks
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Orders
            </Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link href="/signup" className='text-dark ps-2 pe-2'>Sign up / login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
