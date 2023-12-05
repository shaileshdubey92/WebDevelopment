import React from 'react'
import {Link} from 'react-router-dom'

const Nav_bar = () => {
  return (
    <div className="d-flex
    justified-content-between
    bg-primary">
        
   <Link className='text-light p-3
   text-decoration-none' to={'/'}>Home</Link>
   <Link className='text-light p-3
   text-decoration-none' to={'/about'}>About</Link>
   <Link className='text-light p-3
   text-decoration-none' to={'/career'}>Career</Link>
   <Link className='text-light p-3
   text-decoration-none' to={'/teams'}>Teams</Link>
   <Link className='text-light p-3
   text-decoration-none' to={'/contact'}>Contact</Link>
   {/* <Link className='text-light p-3
   text-decoration-none' to={'/product'}>Product</Link>
 */}

    </div>
  )
}

export default Nav_bar
