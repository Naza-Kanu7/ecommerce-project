import React from 'react'
import { Link } from 'react-router-dom'
import CategoriesContainer from '../Categories/Categories.component'
import ProductsList from '../ProductsList/ProductsList.component'
import '../components.css'
import { useState } from 'react'
import CategoryItemsContainer from '../CategoryType/CategoryType.component'

function ProductsContainer() {

  const [listShown, setListShown] = useState('all')

  const settingListShown = listName => {
    setListShown(listName)
  }
  
  return (
    <div>
      <div className='about-header'>
        <h2><Link to='/'>Home</Link> / Products</h2>
      </div>
      <div className='products-container'>
        <div className='categories-container'>
          <CategoriesContainer settingListShown={settingListShown} />
        </div>
        <div className='products-list-container'>
          {listShown === 'all' ? <ProductsList /> : <CategoryItemsContainer listShown={listShown} />} 
        </div>
        
      </div>
    </div>
  )
}

export default ProductsContainer