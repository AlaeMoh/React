"use client";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-danger">Contact Us</h1>
        <p className="text-muted fs-5">
          Have a question or want to place an order? We’d love to hear from you!
        </p>
      </div>

      <div className="row g-5">
        {/* Contact Info */}
        <div className="col-md-5">
          <div className="card shadow-lg border-0 p-4 rounded-4">
            <h4 className="fw-bold mb-3">Get In Touch</h4>
            <p className="mb-1"><strong>Phone:</strong> +20 123 456 789</p>
            <p className="mb-1"><strong>Email:</strong> contact@pizzapalace.com</p>
            <p className="mb-1"><strong>Address:</strong> 123 Pizza Street, Alexandria, Egypt</p>

            <h5 className="fw-bold mt-4">Opening Hours</h5>
            <p className="mb-1">Mon - Fri: 10:00 AM - 11:00 PM</p>
            <p className="mb-1">Sat - Sun: 12:00 PM - 12:00 AM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-7">
          <div className="card shadow-lg border-0 p-4 rounded-4">
            <h4 className="fw-bold mb-4">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea className="form-control" rows={4} placeholder="Your message" required></textarea>
              </div>

              <button type="submit" className="btn btn-danger w-100 fw-bold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="row mt-5">
        <div className="col">
          <iframe
            title="Pizza Palace Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2277.1929!2d29.918739!3d31.200092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDEyJzAwLjMiTiAyOcKwNTUnMDcuNSJF!5e0!3m2!1sen!2seg!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}