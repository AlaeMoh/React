"use client"

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import groceries from '../../assets/hand-drawn.jpg'
import fashion from '../../assets/summer-fashion-sale-poster-free-vector.jpg';
import watch from '../../assets/8f8035132110241.61a27e7591d62.jpg';
import Image from 'next/image';
import "../styles/carousel.css";
export default function page() {
  return (
    <div><Carousel className='carousel pb-5 pt-5'>.
      <Carousel.Item>
        <Image src={groceries} alt={'groceries Sales'} className='image'/>
        <Carousel.Caption>
          <h3>All your groceries in one place</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={fashion} alt={'fashion Sales'} className='image'/>
        <Carousel.Caption>
          <h3>The Most trendy fashions</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={watch} alt={'watch Sales'} className='image'/>
        <Carousel.Caption>
          <h3>Accesseries as you wish</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></div>
  )
}
