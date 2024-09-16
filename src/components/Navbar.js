import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>3D Electronics Store</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
