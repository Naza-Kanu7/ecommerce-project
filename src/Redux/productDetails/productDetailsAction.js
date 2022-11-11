import axios from "axios";

import { 
    FETCH_PRODUCT_DETAILS_REQUEST, 
    FETCH_PRODUCT_DETAILS_SUCCESS,
    FETCH_PRODUCT_DETAILS_FAILURE  
} from "./productDetailsTypes";

export const fetchProductDetailsRequest = () => {
    return{
        type: FETCH_PRODUCT_DETAILS_REQUEST
    }
}

export const fetchProductDetailsSuccess = productsList => {
    return{
        type: FETCH_PRODUCT_DETAILS_SUCCESS,
        payload: productsList
    }
}

export const fetchProductDetailsFailure = error => {
    return{
        type: FETCH_PRODUCT_DETAILS_FAILURE,
        payload: error
    }
}


export const fetchProductDetailsSearch = productId => {
    
    return(dispatch) => {
        dispatch(fetchProductDetailsRequest())
        axios.get(`https://dummyjson.com/products/${productId}`)
        .then(response => {
            const productDetailsResult = response.data
            dispatch(fetchProductDetailsSuccess(productDetailsResult))
        })
        .catch(error => {
            dispatch(fetchProductDetailsFailure(error.message))
        })
    }
}
