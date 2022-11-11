import axios from "axios";

import { 
    FETCH_CATEGORY_TYPES_REQUEST,
    FETCH_CATEGORY_TYPES_SUCCESS, 
    FETCH_CATEGORY_TYPES_FAILURE  
} from "./categoryItemsTypes";


export const fetchCategoryTypesRequest = () => {
    return{
        type: FETCH_CATEGORY_TYPES_REQUEST
    }
}

export const fetchCategoryTypesSuccess = categoryTypesList => {
    return{
        type: FETCH_CATEGORY_TYPES_SUCCESS,
        payload: categoryTypesList
    }
}

export const fetchCategoryTypesFailure = error => {
    return{
        type: FETCH_CATEGORY_TYPES_FAILURE,
        payload: error
    }
}


export const fetchCategoryTypesSearch = categoryName => {
    
    return(dispatch) => {
        dispatch(fetchCategoryTypesRequest())
        axios.get(`https://dummyjson.com/products/category/${categoryName}`)
        .then(response => {
            const categoryTypesResult = response.data
            dispatch(fetchCategoryTypesSuccess(categoryTypesResult))
        })
        .catch(error => {
            dispatch(fetchCategoryTypesFailure(error.message))
        })
    }
}
