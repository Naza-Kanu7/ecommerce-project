import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { fetchProductsSearch } from '../../Redux/products/productsAction'

function ProductsList({ productsListData, fetchProductsSearch }) {

    useEffect(() => {
        fetchProductsSearch()
    }, [])

    return productsListData.loading ? (
        <h2>
            <p></p>
        </h2>
    ) : productsListData.error ? (
        <h2>{productsListData.error}</h2>
    ) : (
        <div className='singleproduct-container'>
            {
                productsListData &&
                productsListData.productsList &&
                productsListData.productsList.products &&
                productsListData.productsList.products.map(singleProduct =>
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
        productsListData: state.productsList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProductsSearch: () => dispatch(fetchProductsSearch()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)