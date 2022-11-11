import { combineReducers } from 'redux'
import fetchCategoriesReducer from './categories/categoriesReducer'
import fetchProductsReducer from './products/productsReducer'
import fetchProductDetailsReducer from './productDetails/productDetailsReducer'
import fetchCategoryTypesReducer from './categoryItems/categoryItemsReducer'


const rootReducer = combineReducers({
    categories: fetchCategoriesReducer,
    productsList: fetchProductsReducer,
    productDetails: fetchProductDetailsReducer,
    categoryItems: fetchCategoryTypesReducer,
})

export default rootReducer