import React from 'react'
import siteLogo from './siteLogo.svg'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../components.css'

function Header() {
  return (
    <div className='header-container'>
      <div className='header-img'>
        <Link to='/'><img src={siteLogo} /></Link>
      </div>
      <div className='header-details'>
        <Link to='/'><p>Home</p></Link>
        <Link to='/about' ><p>About</p></Link>
        <Link to='/productscontainer'><p>Products</p></Link>
      </div>
      <div className='header-text'>
        <Link to='/cartpage'><p>Cart<FaShoppingCart /></p></Link>
        <p>Login <FaUserAlt /></p>
      </div>
    </div>
  )
}

export default Header