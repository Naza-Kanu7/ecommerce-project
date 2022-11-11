import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART,
    ADJUST_QUANTITY
} from "./cartTypes";


export const addToCart = (itemId) => {
    return {
        type: ADD_TO_CART,
        payload : {
            id: itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return{
        type: REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const adjustQuantity = (itemId, value) => {
    return{
        type: ADJUST_QUANTITY,
        payload: {
            id: itemId,
            quantity: value
        }
    }
}
