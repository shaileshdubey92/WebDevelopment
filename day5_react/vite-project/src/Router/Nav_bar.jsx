import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  // console.log(useLocation());
const location = useLocation();

  return (
    <>
    {location.pathname != '/product' && (
   
    <div className="d-flex justify-content-between bg-success">
      <Link className="text-light p-3 text-decoration-none" to={'/'}>
        Home
      </Link>
      <Link className="text-light p-3 text-decoration-none" to={'/products'}>
        Product
      </Link>
      <Link className="text-light p-3 text-decoration-none" to={'/about'}>
        About
      </Link>
      <Link className="text-light p-3 text-decoration-none" to={'/career'}>
        Career
      </Link>
      <Link className="text-light p-3 text-decoration-none" to={'/teams'}>
        Teams
      </Link>
      <Link className="text-light p-3 text-decoration-none" to={'/contact'}>
        Contact
      </Link>
    
    </div>
    )}
    </>
  );
};

export default NavBar;

