import { 
    FETCH_PRODUCT_DETAILS_REQUEST, 
    FETCH_PRODUCT_DETAILS_SUCCESS,
    FETCH_PRODUCT_DETAILS_FAILURE  
} from "./productDetailsTypes";

const initialState = {
    loading: false,
    productsDetails: [],
    error: '',
}

const fetchProductDetailsReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCT_DETAILS_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_PRODUCT_DETAILS_SUCCESS : return{
            ...state,
            loading: false,
            productsDetails: action.payload
        }
        case FETCH_PRODUCT_DETAILS_FAILURE : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export default fetchProductDetailsReducer