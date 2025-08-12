"use client"
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../assets/pizzaLogo.png";
import { useRouter } from "next/navigation";
import Image  from "next/image"


export default function Navbarlayout() {
  const router= useRouter()
  const goHome= ()=>{
    router.push("/")
  }
  const [query, setQuery]= useState("")
  const handleSearch= (e:React.FormEvent)=>{
    e.preventDefault();
    if(query.trim()){
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  }
  return (

 <Navbar expand="lg" className="navbar">
      <Container fluid>

        <Navbar.Brand ><Image className="logo" src={Logo.src} alt="Logo" width={70} height={50} />

</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-white' onClick={goHome}>Home</Nav.Link>
            <Nav.Link  className='text-white' href="/menu">Menu </Nav.Link>
            <Nav.Link className='text-white' href="/about">About  </Nav.Link>
            <Nav.Link className='text-white' href="/contact">
              Contact  
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e)=>{setQuery(e.target.value)}}
            />
            <Button variant="outline-danger"  className='text-white' onClick={handleSearch}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
