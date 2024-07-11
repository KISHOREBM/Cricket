import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="pppp">
        <img src="https://nikonrumors.com/wp-content/uploads/2014/09/Nikon-D750-sample-photo1.jpg" alt="Nikon Logo" />
      </div>
      <div className="link">
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/login'>Login</Link>
        {/* Add other links as needed */}
      </div>
      <Outlet/>
    </div>
  );
}

export default Navbar;
