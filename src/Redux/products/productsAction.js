import axios from "axios";

import { 
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE ,
} from "./productsTypes";


export const fetchProductsRequest = () => {
    return{
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = productsList => {
    return{
        type: FETCH_PRODUCTS_SUCCESS,
        payload: productsList
    }
}

export const fetchProductsFailure = error => {
    return{
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}


export const fetchProductsSearch = () => {
    
    return(dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get('https://dummyjson.com/products')
        .then(response => {
            const productsResult = response.data
            dispatch(fetchProductsSuccess(productsResult))
        })
        .catch(error => {
            dispatch(fetchProductsFailure(error.message))
        })
    }
}
