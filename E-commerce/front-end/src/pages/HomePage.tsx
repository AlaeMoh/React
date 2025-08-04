import React from 'react'
import { Container } from 'react-bootstrap'
import { simpleProducts } from '../data'
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Container>
    <div className="container py-5">
  <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row g-4">
        {simpleProducts.map(product => (
          <div className="col-md-3 col-sm-6" >
            <div className="card h-100 shadow-sm border-0 text-center">
             <Link to={'/product/'+ product.productId}><img src={product.productImageUrl} className="card-img-top" alt={product.productName} /></Link> 
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="text-primary fw-bold">${product.productPrice.toFixed(2)}</p>
                <button className="btn btn-outline-primary btn-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Container>

  );
};

