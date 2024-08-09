import React from "react";
import Assets from "../assets/index";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-red">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Assets.logo} alt="TMMIN Car Rental" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#our-services">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-us">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-success">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
