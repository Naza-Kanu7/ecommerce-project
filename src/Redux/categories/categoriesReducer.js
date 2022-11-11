import { 
    FETCH_CATEGORIES_REQUEST, 
    FETCH_CATEGORIES_SUCCESS, 
    FETCH_CATEGORIES_FAILURE 
} from "./categoriesTypes";



const initialState = {
    loading: false,
    categoriesList: [],
    error: '',
    clickedCategory: ''
}

const fetchCategoriesReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_CATEGORIES_REQUEST : return{
            ...state,
            loading: true
        }
        case FETCH_CATEGORIES_SUCCESS : return{
            ...state,
            loading: false,
            categoriesList: action.payload
        }
        case FETCH_CATEGORIES_FAILURE : return{
            ...state,
            loading: false,
            error: action.payload
        }
        default : return state
    }
}

export default fetchCategoriesReducer