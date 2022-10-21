import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../../data'
import Counter from '../Counter/Counter'
import '../Products/products.css'
import {FaEye} from 'react-icons/fa'



const Men = () => {
    const [men, setMen] = useState(data)
    const filter = men.filter((item) => item.keyword === 'male')
        return (
            <>
              <div className='products-container'>
                {filter.map((item) => {
                    return(
                    // <>
                        
                        <div key={item.id} className='single-product'>

                                <div>
                                    <img src={item.image} alt="" className="product-img" />
                                    </div>

                                    <div className="thin-line"></div>

                                    <h2 className='product-title'>{item.title}</h2>

                                <div className="price-container">
                                    <div className='product-price'>
                                        <p>$</p>
                                        <h2>{item.price}</h2>
                                        </div>

                                        <div className="discount">
                                        <h6>{item.discountPercent}</h6>
                                        </div>
                                </div>

                                <div className='previous-price-container'>
                                    <span className="previous-price">${item.prevPrice}</span>
                                </div>

                                <Counter id={item.id} />

                                <Link to={`/product/${item.id}`}>
                                    <div className='view'>
                                        <button className='view-btn'>View Product Details</button>
                                        <span><FaEye className='view-btn' /></span>
                                    </div>
                                </Link>

                        </div>
                        
                    // </>
                    )
                })}
              </div>
            </>
  )   
}

export default Men