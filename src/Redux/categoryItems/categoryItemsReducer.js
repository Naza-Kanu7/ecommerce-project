import { 
    FETCH_CATEGORY_TYPES_REQUEST,
    FETCH_CATEGORY_TYPES_SUCCESS, 
    FETCH_CATEGORY_TYPES_FAILURE  
} from "./categoryItemsTypes";

const initialState = {
    loading: false,
    categoryTypesList: [],
    error: '',
}

const fetchCategoryTypesReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_CATEGORY_TYPES_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_CATEGORY_TYPES_SUCCESS : return{
            ...state,
            loading: false,
            categoryTypesList: action.payload
        }
        case FETCH_CATEGORY_TYPES_FAILURE : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export default fetchCategoryTypesReducer