import React from "react";
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_CART_QUANTITY,
    DECREASE_CART_QUANTITY,
    CLEAR_CART
} from "./cartTypes";

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {

    let cart = state.cart;

    switch (action.type) {

        case ADD_TO_CART:

            const check_item = cart.find(item => item.product.id === action.payload.product.id)
            console.log("checking", action.payload)

            if (check_item) {
                check_item.quantity += action.payload.quantity
            } else {
                cart.push(action.payload)
            }

            // cart.push(action.payload);
            console.log("check cart", cart)
            return {
                ...state,
                cart: cart
            };
        case INCREASE_CART_QUANTITY:

            console.log('increase cart', cart)
            let itemToIncrease = cart.find(item => item.product.id === action.payload.productId);

            itemToIncrease.quantity = action.payload.quantity;

            return {
                ...state,
                cart: cart
            };
        case DECREASE_CART_QUANTITY:

            let itemToDecrease = cart.find(item => item.product.id == action.payload.productId);

            itemToDecrease.quantity = action.payload.quantity;

            return {
                ...state,
                cart: cart
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: cart.filter(item => item.product.id != action.payload.productId)
            };
        case CLEAR_CART:
            return {
                cart: []
            };
        default:
            return state;
    }
};

export default cartReducer;


