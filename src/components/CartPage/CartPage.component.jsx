import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import sampleImg from './sampleimg.jpeg'
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { increaseCartQuantity, decreaseCartQuantity, clearCart } from '../../Redux/Cart/cartAction';
import { removeFromCart } from '../../Redux/Cart/cartAction';

function CartPageContainer() {

    const cartList = useSelector((state) => state.cartList)

    const dispatch = useDispatch()

    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [shippingPrice, setShippingPrice] = useState(0)
    const [emptyCart, setEmptyCart] = useState(false)

    useEffect(() => {

        let cartPrices = 0
        const cartItems = cartList.cart
        if (cartItems.length === 0) {
            console.log('empty cart')
            setEmptyCart(true)
        }
        for (const cartItem of cartItems) {
            cartPrices += cartItem.product.price * cartItem.quantity
        }
        setTotalCartPrice(cartPrices)
        setShippingPrice(5.34)
    }, [cartList])

    const increaseQuantity = (itemId, itemQuantity) => {
        dispatch(increaseCartQuantity(itemId, itemQuantity))
    }

    const decreaseQuantity = (itemId, itemQuantity) => {
        if (itemQuantity > 1) {
            dispatch(decreaseCartQuantity(itemId, itemQuantity))
        } else {
            dispatch(removeFromCart(itemId))
        }

    }

    const removeItemFromCart = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    const clearCartItems = () => {
        dispatch(clearCart())
    }
    // if (cartList.cart.length === 0) {
    //     console.log('empty cart')
    //     setEmptyCart(true)
    // }

    return (
        <>
            {
                emptyCart ? (
                    <div className='empty-cart'>
                        <h1 >Your Cart is Empty!</h1>
                        <Link to='/productscontainer'>
                            <button>FILL IT</button>
                        </Link>
                        
                    </div>

                ) : (
                    <>
                        <div className='about-header'>
                            <h2><Link to='/'>Home</Link> / Cart</h2>
                        </div>
                        <div className='carttitle-container'>
                            <p className='subtotal-title'>Item</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p className='subtotal-name'>Subtotal</p>
                            <p>Action</p>
                        </div>
                        {
                            cartList.cart.map(singleCartItem =>
                                <div className='cartitem-container' key={singleCartItem.product.id}>
                                    <div className='cartitem-name'>
                                        <img src={singleCartItem.product.thumbnail} />
                                        <h5>{singleCartItem.product.title}</h5>
                                    </div>
                                    <p>${singleCartItem.product.price}</p>
                                    <div className='cartitem-quantity'>
                                        <span onClick={() => decreaseQuantity(singleCartItem.product.id, singleCartItem.quantity)}>-</span>
                                        <h3>{singleCartItem.quantity}</h3>
                                        <span onClick={() => increaseQuantity(singleCartItem.product.id, singleCartItem.quantity)}>+</span>
                                    </div>
                                    <p className='subtotal'>${singleCartItem.product.price * singleCartItem.quantity}</p>
                                    <span className='cartitem-icon' onClick={() => removeItemFromCart(singleCartItem.product.id)}><FaTrash /></span>
                                </div>
                            )
                        }
                        <div className='cart-footer-container'>
                            <div className='first-footer-button'>
                                <Link to='/productscontainer'>
                                    <button>Continue Shopping</button>
                                </Link>
                            </div>
                            <div className='second-footer-button'>
                                <button onClick={clearCartItems}>Clear Shopping Cart</button>
                            </div>
                        </div>
                        <div className='cart-total-container'>
                            <div className='cart-total-details'>
                                <h5>Subtotal: </h5>
                                <h5>${totalCartPrice}</h5>
                            </div>
                            <div className='cart-total-details'>
                                <p>Shipping Fee: </p>
                                <p>${shippingPrice}</p>
                            </div>
                            <div className='cart-total-details order-total'>
                                <h4>Order Total: </h4>
                                <h4>${totalCartPrice + shippingPrice}</h4>
                            </div>
                        </div>
                        <div className='checkout'>
                            <button>CHECKOUT</button>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default CartPageContainer




    // <div>
    //     <h2>{
    //         cartList.cart.map(singleCartItem =>
    //             <div key={singleCartItem.product.id}>
    //                 <h2>{singleCartItem.product.id}</h2>
    //             </div>)
    //     }
    //     </h2>
    // </div>