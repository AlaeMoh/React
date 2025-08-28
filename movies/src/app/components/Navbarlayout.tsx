"use client"
import React from 'react'
import  '../styles/navbarstyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbarlayout() {
  return (
     <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#" className='px-5'><span className="logo">Cinema</span><span className='text-white'>Mix</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="mx-auto p-2"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="trending" className='text-white'>Trending</Nav.Link>
            <Nav.Link href="popular" className='text-white'>Popular</Nav.Link>
            <Nav.Link href="toprated" className='text-white'>Top rated</Nav.Link>
          </Nav>
          <Form className="d-flex position-relative">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="outline" className='text-white position-absolute top-50 end-0 translate-middle-y'><FontAwesomeIcon icon={faSearch} className='text-dark' /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
