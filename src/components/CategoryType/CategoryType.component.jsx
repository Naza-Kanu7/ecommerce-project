import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { fetchCategoryTypesSearch } from '../../Redux/categoryItems/categoryItemsAction'

function CategoryItemsContainer({ categoryItemsData, fetchCategoryTypesSearch, listShown }) {

    // const { categoryName } = useParams()
    // const categoryTitle = categoryName

    useEffect(() => {
        fetchCategoryTypesSearch(listShown)
    }, [listShown])

    return categoryItemsData.loading ? (
        <h2>
            <p></p>
        </h2>
    ) : categoryItemsData.error ? (
        <h2>{categoryItemsData.error}</h2>
    ) : (
        <div className='categoryproduct-container'>
            {
                categoryItemsData &&
                categoryItemsData.categoryTypesList &&
                categoryItemsData.categoryTypesList.products &&
                categoryItemsData.categoryTypesList.products.map(singleProduct =>
                    <div key={singleProduct.id} className='singleproduct-details'>
                        <div className='singleproduct-img-container'>
                            <Link to={`/productdetails/${singleProduct.id}`}><img src={singleProduct.thumbnail} /></Link>
                            {/* <div className='image-icon'><FaSistrix /></div> */}
                        </div>
                        <div className='products-title-price'>
                            <p className='title'>{singleProduct.title}</p>
                            <p className='price'>${singleProduct.price}</p>
                        </div>
                    </div>)
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
        categoryItemsData: state.categoryItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCategoryTypesSearch: (categoryName) => dispatch(fetchCategoryTypesSearch(categoryName)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryItemsContainer)