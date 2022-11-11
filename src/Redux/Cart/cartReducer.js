import React from "react";
import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART,
    ADJUST_QUANTITY
} from "./cartTypes";

// import { useSelector } from 'react-redux'
// import { getProductslist } from "../products/productsSelector";

// const productsList = useSelector(getProductslist)

export const cartInitialState = {
    // products : productsList,
    cartItems : [],
}


const cartReducer = (state =cartInitialState, action) => {
    switch(action.type) {
        case ADD_TO_CART : return{}
        case REMOVE_FROM_CART: return{}
        case ADJUST_QUANTITY: return{}
        default:
            return state
    }
}

export default cartReducer
