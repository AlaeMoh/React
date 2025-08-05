import React, { useEffect, useReducer } from 'react'
import { Container } from 'react-bootstrap'
import { simpleProducts } from '../data'
import { Link } from 'react-router-dom';
import { Products } from '../types/Product';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { fetchProducts } from "../services/productService";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
type State = {
  products: Products[],
  loading: boolean
  error: string
}
type Action =
  | { type: 'FETCH_REQUEST' }
  | {
      type: 'FETCH_SUCCESS'
      payload: Products[]
    }
  | { type: 'FETCH_FAIL'; payload: string }

  const initialState: State = {
  products: [],
  loading: true,
  error: '',
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true }
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false }
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default function HomePage() {
const [{ loading, error, products }, dispatch] = useReducer(reducer, initialState);


useEffect(() => {
  const loadProducts = async () => {
    dispatch({ type: 'FETCH_REQUEST' });
    try {
      const products = await fetchProducts();
      dispatch({ type: 'FETCH_SUCCESS', payload: products });
    } catch (error) {
      dispatch({ type: 'FETCH_FAIL', payload: getError(error as ApiError) });
    }
  };
  loadProducts();
}, []);
  return loading? (
      <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
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

