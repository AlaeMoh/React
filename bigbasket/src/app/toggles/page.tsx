"use client"

import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "../styles/toggles.css";
export default function Page() {
  return (
    <div className='bg-light rounded-3'> 
        <Nav justify variant="pills" defaultActiveKey="/home" >
       <Nav.Item>
        <Nav.Link href="/home">All products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='text-dark' href="/category/groceries">Groceries</Nav.Link>
      </Nav.Item>
         <Nav.Item>
        <Nav.Link eventKey="link-5"className='text-dark' href='/category/Snacks'>Snacks</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-2" className='text-dark' href='/category/Electronics'>Electronics</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3" className='text-dark' href='/category/Clothings'>Fashion</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-4" className='text-dark' href='/category/accessories'>Accessories</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}
