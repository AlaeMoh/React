"use client"
import React, { useEffect, useState } from 'react'
import  '../styles/navbarstyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';
import VoiceSearch from '../services/voicesearch';


export default function Navbarlayout() {
  const router = useRouter()
  const [query, setQuery] =  useState("");
  const [theme, setTheme] = useState("dark")
 
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>)=>{
    
 if (e.key === "Enter") {
    e.preventDefault(); 
    if (query.trim() !== "") {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  }
  }

  useEffect(()=>{
    const savedTheme= localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.body.setAttribute("data-theme", savedTheme)
  },[])

  const toggleTheme = ()=>{
    const newTheme= theme === "dark"? "light": "dark";
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.body.setAttribute("data-theme", newTheme);
  }

  return (
     <Navbar expand="lg" fixed="top"  className="custom-navbar">
      <Container fluid>
        <Navbar.Brand className='px-5'><span className="logo">Cinema</span><span className='text-white'>Mix</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="mx-auto p-2"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='nav-text'>Home</Nav.Link>
            <Nav.Link href="/trending" className='nav-text'>Trending</Nav.Link>
            <Nav.Link href="/popular" className='nav-text'>Popular</Nav.Link>
            <Nav.Link href="/toprated" className='nav-text'>Top rated</Nav.Link>
            <Nav.Link href="/watchlist" className='nav-text'>WatchList</Nav.Link>

         </Nav>
          <Form className="d-flex position-relative">
  <Form.Control
    type="search"
    placeholder="Search"
    className="me-2 bg-secondary rounded-4"
    aria-label="Search"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onKeyDown={handleSearch}
  />

  {/* 🔍 Search Button */}
  <Button
    variant="outline"
    className="position-absolute top-50 end-0 translate-middle-y"
    onClick={() => {
      query.trim() !== "" &&
        router.push(`/search?query=${encodeURIComponent(query)}`);
    }}
  >
    <FontAwesomeIcon icon={faSearch} className="text-dark" />
  </Button>

  {/* 🎤 Voice Search Button */}
  <VoiceSearch
    onResult={(text) => {
      setQuery(text);
      router.push(`/search?query=${encodeURIComponent(text)}`);
    }}
  />
</Form>


          <Button className='bright-mode' onClick={toggleTheme}>
           {theme === "dark" ?  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffffff"><rect fill="none" height="24" width="24"/><path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/></svg>}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
           } 