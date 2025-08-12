

"use client";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import kitchen from "../../assets/bustling-kitchen-scene-stockcake.jpg"
export default function Page() {
  return (
    <div className="container my-5">
      {/* Page Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-danger">About Us</h1>
        <p className="text-muted fs-5">
          Serving delicious pizza with fresh ingredients since 1999.
        </p>
      </div>

      <div className="row align-items-center g-5">
        {/* Image Section */}
        <div className="col-md-6">
          <Image
            src={kitchen}
            alt="Our Pizza Kitchen"
            className="rounded-4 shadow-lg"
            width={500}
            height={400}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Our Story</h2>
          <p className="text-muted">
            At <strong>Pizza Palace</strong>, we believe in more than just making pizza.
            We create experiences. For over 20 years, our chefs have been using
            traditional recipes and the finest ingredients to craft pizzas that
            bring people together.
          </p>
          <p className="text-muted">
            Whether you’re grabbing a quick slice on your lunch break or sharing
            a family dinner, our goal is always the same — to make your day a
            little bit better (and a lot tastier!).
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="row my-5">
        <div className="col text-center">
          <h3 className="fw-bold text-success">Our Mission</h3>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            To serve the freshest, most flavorful pizzas in town while creating a
            warm and welcoming atmosphere for all our customers.
          </p>
        </div>
      </div>
    </div>
  );
}