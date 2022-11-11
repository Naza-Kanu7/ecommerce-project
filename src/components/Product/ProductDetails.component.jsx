import React from 'react'
import { fetchProductDetailsSearch } from '../../Redux/productDetails/productDetailsAction'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function ProductDetails({ productDetails, fetchProductDetailsSearch }) {
  const { detailsId } = useParams()
  const detailId = detailsId

  useEffect(() => {
    fetchProductDetailsSearch(detailId)
  }, [])

  const { title, thumbnail, price, description, stock, category, brand, rating } = productDetails.productsDetails

  const [itemNo, setItemNo] = useState(1)

  const increaseItemNo = () => {
    const increased = itemNo + 1
    if (itemNo >= stock) {
      setItemNo(stock)
    } else {
      setItemNo(increased)
    }
  }
  const decreaseItemNo = () => {
    const decreased = itemNo - 1
    if (itemNo === 1) {
      setItemNo(1)
    } else{
      setItemNo(decreased)
    }
    
  }

  return productDetails.loading ? (
    <h2>
      <p></p>
    </h2>
  ) : productDetails.error ? (
    <h2>{productDetails.error}</h2>
  ) : (
    <div>
      {
        productDetails &&
        productDetails.productsDetails &&
        <>
          <div className='about-header'>
            <h2><Link to='/'>Home</Link> / <Link to='/productscontainer'>Products</Link> /  {title}</h2>
          </div>
          <div className='details-container'>
            <Link to='/productscontainer'><button>BACK TO PRODUCTS</button></Link>
            <div className='details-flex'>
              <div className='details-img-container'>
                <img src={thumbnail} alt={title} />
              </div>
              <div className='details-texts-container'>
                <h2>{title}</h2>
                <p className='price'>${price}</p>
                <p className='description'>{description}</p>
                <p className='bit-dits'><span>Available: </span> {stock > 0 ? 'In-Stock' : 'Out Of Stock'}</p>
                <p className='bit-dits'><span>Category: </span> {category}</p>
                <p className='bit-dits'><span>Brand: </span> {brand}</p>
                <p className='bit-dits'><span>Rating: </span> {rating} /5.00</p>
                <div className='detail-add-to-cart'>
                  <h3><span onClick={() => decreaseItemNo()}>-</span>{itemNo}<span onClick={() => increaseItemNo()}>+</span></h3>
                  <Link to='/cartpage'><button>ADD TO CART</button></Link>
                </div>
              </div>
            </div>


          </div>
        </>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    productDetails: state.productDetails
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchProductDetailsSearch: (productId) => dispatch(fetchProductDetailsSearch(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)