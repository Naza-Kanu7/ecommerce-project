import React, { useEffect } from 'react'
import siteLogo from './siteLogo.svg'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../components.css'
import { useState } from 'react'

function Header() {

  const cartList = useSelector((state) => state.cartList)

  const [totalCartQuantity, setTotalCartQuantity] = useState(0)

  useEffect(() => {
    let cartQuantity = 0
    const cartItems = cartList.cart
    for (const cartItem of cartItems) {
      cartQuantity += cartItem.quantity
    }
    setTotalCartQuantity(cartQuantity)
  }, [cartList])

  


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
        <Link to='/cartpage'><p>Cart<FaShoppingCart /></p><span className='cart-no'>{totalCartQuantity}</span></Link>
        <p>Login <FaUserAlt /></p>
      </div>
    </div>
  )
}

export default Header