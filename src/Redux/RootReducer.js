import { combineReducers } from 'redux'
import fetchCategoriesReducer from './categories/categoriesReducer'
import fetchProductsReducer from './products/productsReducer'
import fetchProductDetailsReducer from './productDetails/productDetailsReducer'
import fetchCategoryTypesReducer from './categoryItems/categoryItemsReducer'
import cartReducer from './Cart/cartReducer'


const rootReducer = combineReducers({
    categories: fetchCategoriesReducer,
    productsList: fetchProductsReducer,
    productDetails: fetchProductDetailsReducer,
    categoryItems: fetchCategoryTypesReducer,
    cartList: cartReducer,

})

export default rootReducer