"use client"
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footerlayout() {
  return (
<footer className="position-sticky bottom-0 bg-dark text-light pt-4">
      <div className="container">
        <div className="row">
          {/* Shopping Categories */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="text-uppercase">Shopping Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Groceries</a></li>
              <li><a href="#" className="text-light text-decoration-none">Electronics</a></li>
              <li><a href="#" className="text-light text-decoration-none">Fashion</a></li>
              <li><a href="#" className="text-light text-decoration-none">Home & Kitchen</a></li>
              <li><a href="#" className="text-light text-decoration-none">Beauty & Health</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="text-uppercase">Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Track Order</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns & Refunds</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shipping Info</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="text-uppercase">About BigBasket</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Press</a></li>
              <li><a href="#" className="text-light text-decoration-none">Affiliate Program</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3 col-sm-6 mb-3">
            <h5 className="text-uppercase">Follow Us</h5>
            <div>
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center py-3 border-top border-secondary mt-3">
          <small>
            &copy; {new Date().getFullYear()} BigBasket — All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}
