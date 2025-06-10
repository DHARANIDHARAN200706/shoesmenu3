import React from 'react';

export default function Navbar() {
  const navItemStyle = {
    marginRight: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    fontSize: '16px',
    padding: '8px 12px',
    borderRadius: '5px',
    transition: '0.3s',
  };

  const linkHoverStyle = {
    backgroundColor: '#f0f0f0',
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="#">URWISH</a>
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
            <li className="nav-item" style={navItemStyle}>
              <a className="navq" href="https://hyuwqeoiuryfpihyfroiu.neocities.org/jaishow/mou" style={linkStyle}>
                Order
              </a>
            </li>
            <li className="nav-item" style={navItemStyle}>
              <a className="navq" href="https://hyuwqeoiuryfpihyfroiu.neocities.org/jaishow/mou" style={linkStyle}>
                Trending
              </a>
            </li>
            <li className="nav-item" style={navItemStyle}>
              <a className="navq" href="https://hyuwqeoiuryfpihyfroiu.neocities.org/jaishow/home" style={linkStyle}>
                Home
              </a>
            </li>
            <li className="nav-item" style={navItemStyle}>
              <a className="navq" href="https://hyuwqeoiuryfpihyfroiu.neocities.org/jaishow/product" style={linkStyle}>
                Shop
              </a>
            </li>
            <li className="nav-item active" style={navItemStyle}>
              <a className="navq" href="https://hyuwqeoiuryfpihyfroiu.neocities.org/jaishow/cont" style={linkStyle}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
