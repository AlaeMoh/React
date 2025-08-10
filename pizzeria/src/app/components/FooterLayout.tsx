"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from 'react'

export default function FooterLayout() {
  return (
 <footer className="bg-black text-light  position-absolute bottom-0 w-100">
      <Container className="footer">
        <Row className="">
          {/* Brand Info */}
          <Col  className=" text-md-start mt-2">
            <h6 className=".fs-6">🍕 Pizzeria</h6>
            <p className="small">
              Freshly baked pizzas with love and the best ingredients.
            </p>
          </Col>

         <Col className="text-center small mt-5">
            &copy; {new Date().getFullYear()} Pizzeria. All rights reserved.
          </Col>


          {/* Social Links */}
          <Col  className=" text-md-end mt-3">
            
            <div className="d-flex justify-content-center justify-content-md-end gap-3 ">
             <h6 className="mt-2">Follow Us</h6>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light fs-5">
                <FaTwitter />
              </a>
            </div>
          </Col>
          
        </Row>


      </Container>
    </footer>
    
)
}
