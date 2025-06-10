// src/components/Navbar.js
import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="#">HOTPACK</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="navq" href="https://hyuwqeoiuryfpihyfroiu.neocities.org/jaishow/mou">
                <strong>Order</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="navq" href="https://hyuwqeoiuryfpihyfroiu.neocities.org/jaishow/mou">
                <strong>Trending</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="navq" href="https://hyuwqeoiuryfpihyfroiu.neocities.org/jaishow/home">
                <strong>Home</strong>
              </a>
            </li>
            <li className="nav-item">
              <a className="navq" href="https://hyuwqeoiuryfpihyfroiu.neocities.org/jaishow/product">
                <strong>Shop</strong>
              </a>
            </li>
            <li className="nav-item active">
              <a className="navq" href="https://hyuwqeoiuryfpihyfroiu.neocities.org/jaishow/cont">
                <strong>Contact</strong>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
