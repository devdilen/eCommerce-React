import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar className="bg-body-secondary "   >
      <Navbar.Brand href="#home">
    <Link to={''}>  <i style={{marginLeft:'5px'}} class="fa-solid text-primary fa-2x fa-cart-shopping"></i></Link>
       <strong className='ms-2' style={{fontSize:'30px'}} >Aura</strong>
      </Navbar.Brand>
   
  </Navbar>
  )
}

export default Header

