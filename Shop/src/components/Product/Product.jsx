import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data'
import Counter from '../Counter/Counter'
import './product.css'




const Product = () => {
  const {id} = useParams()
  const [item, setItem] = useState(data)

  useEffect(() => {
      const specificProduct = data.find((product) => product.id === parseInt(id))
      setItem(specificProduct)
  },[])

  return (
      <>
        <section className='product-container'>
              <div className="image-container">
                  <img src={item.image} alt={item.title} className='item-img' />
              </div>

              <div className="product-details">

                  <div className="heading">
                      <p className='brand'>Brand: {item.brand}</p>
                      <h1>{item.title}</h1>
                  </div>


                  <div className="description">{item.description}</div>

                      <div className="discount-container">

                          <div className="price-contain">
                                <h3>${item.price}.00</h3>
                                <h6 className='discount'>{item.discountPercent}</h6>
                          </div>

                          <p className='previous-price'>${item.prevPrice}</p>
                      </div>


                  <div>
                    <Counter id={parseInt(id)} />
                  </div>

              </div>
        </section>
      </>
  )
}

export default Product