import React from 'react'

function News() {
  return (
    <div className='news-container'>
        <h2>Join our newsletter and get 20% off</h2>
        <div className='news-container-flex'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
            <div className='news-input'>
                <input type='email' placeholder='Enter Email' />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default News