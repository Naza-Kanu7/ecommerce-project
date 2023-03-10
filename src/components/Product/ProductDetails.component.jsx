import React from 'react'
import { fetchProductDetailsSearch } from '../../Redux/productDetails/productDetailsAction'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// import { addItemToCart } from './actions';
import { addToCart } from '../../Redux/Cart/cartAction';



function ProductDetails() {
 

  const { detailsId } = useParams()
  const detailId = detailsId


  const productDetails = useSelector((state) => state.productDetails)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductDetailsSearch(detailId))
  }, [])


  const navigate = useNavigate();


  const item = productDetails.productsDetails
  console.log(item)


  const { title, thumbnail, price, description, stock, category, brand, rating } = item



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
    } else {
      setItemNo(decreased)
    }

  }
  



  const handleAddToCart = (item, itemNo) => {
    dispatch(addToCart(item, itemNo))
    setItemNo(1)
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
            <button onClick={() => navigate(-1)}>BACK TO PRODUCTS</button>
            <div className='details-flex'>
              <div className='details-img-container'>
                <img src={thumbnail} alt={title} />
              </div>
              <div className='details-texts-container'>
                <h2>{title}</h2>
                <p className='price'>{detailId}</p>
                <p className='price'>${price}</p>
                <p className='description'>{description}</p>
                <p className='bit-dits'><span>Available: </span> {stock > 0 ? 'In-Stock' : 'Out Of Stock'}</p>
                <p className='bit-dits'><span>Category: </span> {category}</p>
                <p className='bit-dits'><span>Brand: </span> {brand}</p>
                <p className='bit-dits'><span>Rating: </span> {rating} /5.00</p>
                <div className='detail-add-to-cart'>
                  <h3>
                    <span onClick={() => decreaseItemNo()}>-</span>
                      {itemNo}
                    <span onClick={() => increaseItemNo()}>+</span>
                  </h3>
                  {/* <Link to='/cartpage'>
                    
                  </Link> */}
                  <button onClick={() => handleAddToCart(item, itemNo)}>ADD TO CART</button>
                </div>
              </div>
            </div>


          </div>
        </>
      }
    </div>
  )
}

export default ProductDetails






// import { connect } from 'react-redux'
// { productDetails, fetchProductDetailsSearch }

// useEffect(() => {
//   fetchProductDetailsSearch(detailId)
//   console.log(detailId)
// }, [])


// const mapStateToProps = state => {
//   return {
//     productDetails: state.productDetails
//   }
// }


// const mapDispatchToProps = dispatch => {
//   return {
//     fetchProductDetailsSearch: (productId) => dispatch(fetchProductDetailsSearch(productId))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
