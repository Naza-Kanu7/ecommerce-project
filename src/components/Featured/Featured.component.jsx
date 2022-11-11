import React from 'react'
import { Link } from 'react-router-dom'


import pictureOne from './product1.jpg'
import pictureTwo from './product2.jpg'
import pictureThree from './product3.jpg'
import '../components.css'

function Featured() {
  return (
    <div className='featured-container'>
        <h1>Featured Products</h1>
        <div className='featured-flex'>
           <div className='product-container'>
                <img src={pictureOne} />
                <div className='product-text'>
                    <p>Entertainment Center</p>
                    <span>$599.99</span>
                </div>
           </div>
           <div className='product-container'>
                <img src={pictureTwo} />
                <div className='product-text'>
                    <p>High-Back Bench</p>
                    <span>$399.99</span>
                </div>
           </div>
           <div className='product-container'>
                <img src={pictureThree} />
                <div className='product-text'>
                    <p>Modern Bookshelf</p>
                    <span>$319.99</span>
                </div>
           </div>
        </div>
        <div className='featured-button'>
            <Link to='/productscontainer'><button>See all Products</button></Link>
        </div>
        
    </div>
  )
}

export default Featured