import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_CART_QUANTITY,
    DECREASE_CART_QUANTITY,
    CLEAR_CART
} from "./cartTypes";


export const addToCart = (product, quantity) => {

    return {
        type: ADD_TO_CART,
        payload: {
            product,
            quantity
        }
    }
};

export const removeFromCart = (productId) => {

    return {
        type: REMOVE_FROM_CART,
        payload: {
            productId: productId
        }
    }
};

export const increaseCartQuantity = (productId, quantity) => {

    return {
        type: INCREASE_CART_QUANTITY,
        payload: {
            productId,
            quantity: quantity + 1
        }
    }
};

export const decreaseCartQuantity = (productId, quantity) => {

    return {
        type: DECREASE_CART_QUANTITY,
        payload: {
            productId,
            quantity: quantity - 1
        }
    }
};

export const clearCart = () => {

    return {
        type: CLEAR_CART,
    }
};