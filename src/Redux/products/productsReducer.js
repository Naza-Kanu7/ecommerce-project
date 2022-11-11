import { 
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS, 
    FETCH_PRODUCTS_FAILURE,
} from "./productsTypes";


const initialState = {
    loading: false,
    productsList: [],
    error: '',
}

const fetchProductsReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_PRODUCTS_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_PRODUCTS_SUCCESS : return{
            ...state,
            loading: false,
            productsList: action.payload
        }
        case FETCH_PRODUCTS_FAILURE : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}



export default fetchProductsReducer