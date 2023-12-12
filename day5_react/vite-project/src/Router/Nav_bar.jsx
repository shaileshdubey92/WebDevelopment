import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
  // console.log(useLocation());
const location = useLocation();
const [searchTerm, setSearchTerm] = useState("")
const navigate = useNavigate();

console.log(searchTerm)

const submitHandler =(e) =>{
  e.preventDefault();
if(searchTerm!=""){
  navigate(`/products/search/${searchTerm}`);
}

}
  return (
    <>
    {/* {location.pathname != '/product' && ( */}
   
    <div className="d-flex justify-content-between items-align-center bg-sticky-top z-1">
      <Link className="text-light p-3 text-decoration-none" to={'/'}>
        Home
      </Link>
      
      <Link className="text-light p-3 text-decoration-none" to={'/products'}>
        Product
      </Link>
      <Link className="text-light p-3 text-decoration-none" to={'/about'}>
        About
        </Link>
        <form className="my-3" onSubmit={submitHandler}>
           <input
           onChange={(e)=>setSearchTerm(e.target.value)}
           type='text' style={{
            width:'400px'
           }}/>
             
            </form>

     
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
    {/* )} */}
    </>
  );
};

export default NavBar;

