import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function page() {
  return (
     <div className="container my-5">
      <div className="row">
        {/* Selected Pizza Details */}
        <div className="col-md-5">
          <div className="card shadow-lg border-0 rounded-4">
            {/* <img
              src={selectedPizza.image}
              alt={selectedPizza.name}
              className="card-img-top rounded-top-4"
            /> */}
            <div className="card-body">
              <h4 className="card-title text-center">name</h4>
              <p className="card-text text-center text-danger fw-bold fs-5">
               price
              </p>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <div className="col-md-7">
          <div className="card p-4 shadow-lg border-0 rounded-4">
            <h3 className="mb-4 text-center text-success">Complete Your Order</h3>

            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Delivery Address</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your address"
                  
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-danger w-100 fw-bold">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
