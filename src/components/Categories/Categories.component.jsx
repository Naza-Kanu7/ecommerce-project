import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

import { fetchCategoriesSearch } from '../../Redux/categories/categoriesActions'

function CategoriesContainer({ settingListShown }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesSearch())
    }, [])

    const categoryListData = useSelector(state => state.categories)



    return categoryListData.loading ? (
        <h2>
            <p></p>
        </h2>
    ) : categoryListData.error ? (
        <h2>{categoryListData.error}</h2>
    ) : (
        <div>
            <div className='categorieslist-container'>
                <h2>Category</h2>
                <div className='categories-names'>
                    <p onClick={() => settingListShown('all')}>All</p>
                    {
                        categoryListData &&
                        categoryListData.categoriesList &&
                        categoryListData.categoriesList.map(categoryName =>
                            <p key={uuid()} onClick={() => settingListShown(categoryName)}>{categoryName}</p>)
                        // <Link key={uuid()} to={`/categories/${categoryName}`}> <p onClick={() => settingListShown(categoryName)}>{categoryName}</p></Link>
                    }
                </div>
            </div>
        </div>
    )
}


export default CategoriesContainer




// import { Connect } from 'react-redux';

// GOTTEN WHEN I WAS USING MAP STATE TO PROPS AND MAP DISPATCH TO PROPS
// categoryListData, fetchCategoriesList,

// useEffect(() => {
//     fetchCategoriesList()
//     console.log("categories", categoryListDatas)
// }, [])



// const mapStateToProps = state => {
//     return {
//         categoryListData: state.categories,
//     }
// }


// const mapDispatchToProps = dispatch => {
//     return {
//         fetchCategoriesList: () => dispatch(fetchCategoriesSearch()),
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)
