import axios from "axios";

import { 
    FETCH_CATEGORIES_REQUEST, 
    FETCH_CATEGORIES_SUCCESS, 
    FETCH_CATEGORIES_FAILURE 
} from "./categoriesTypes";



export const fetchCategoriesRequest = () => {
    return{
        type: FETCH_CATEGORIES_REQUEST
    }
}

export const fetchCategoriesSuccess = categoriesList => {
    return{
        type: FETCH_CATEGORIES_SUCCESS,
        payload: categoriesList
    }
}

export const fetchCategoriesFailure = error => {
    return{
        type: FETCH_CATEGORIES_FAILURE,
        payload: error
    }
}


export const fetchCategoriesSearch = () => {
    
    return(dispatch) => {
        dispatch(fetchCategoriesRequest())
        axios.get('https://dummyjson.com/products/categories')
        .then(response => {
            const categoriesResult = response.data
            dispatch(fetchCategoriesSuccess(categoriesResult))
        })
        .catch(error => {
            dispatch(fetchCategoriesFailure(error.message))
        })
    }
}
