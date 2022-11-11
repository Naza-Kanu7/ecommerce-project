import React from 'react'
import { Link } from 'react-router-dom'

function CartPageContainer() {
    return (
        <div>
            <div className='about-header'>
                <h2><Link to='/'>Home</Link> / Cart</h2>
            </div>
        </div>
    )
}

export default CartPageContainer