import React from 'react'
import picture from './picture.jpeg'
import '../components.css'
import { Link } from 'react-router-dom'

function Show() {
  return (
    <div className='section-one-container'>
        <div className='section-one-text'>
            <h1>Design Your  Comfort Zone</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
            <Link to='/productscontainer'><button>Shop Now</button></Link>
        </div>
        <div className='section-one-img'>
            <img src={picture} />
        </div>
    </div>
  )
}

export default Show