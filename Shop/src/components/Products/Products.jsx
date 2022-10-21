import React,{useState, useEffect} from 'react'
import './products.css'
// const url = 'https://svelte-store-project-server.herokuapp.com/products'
import data from '../../data'
import Cart from '../Cart/Cart'
import Counter from '../Counter/Counter'
import {FaEye} from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Products= ({count}) => {

  const [products, setProducts] = useState(data)
  
  const [showCart, setShowCart] = useState(false)

  
  // const increase = (action) => {
  //   data.map((item) => {
  //      if(item.id === action.payload.id){
  //         dispatch(increment())
  //      }
  //      return item
  //   })
  //   // dispatch(increment())
  // }

  

  // const fetchProducts = async () => {
  //     try{
  //         const response = await fetch(url)
  //         const products = await response.json()
  //         setProducts(products)
  //         console.log(products);
  //     } catch(error){
  //         console.log(error);
  //     }
  // }

  // useEffect(() => {
  //     fetchProducts()
  // }, [])


  return (
    <>
      <div className='products-container'>
        {products.map(({image, id, title, price, description, discountPercent, prevPrice}) => {
          return (
            <div key={id} className='single-product'>

              <div>
                <img src={image} alt="" className="product-img" />
                </div>

                <div className="thin-line"></div>

                <h2 className='product-title'>{title}</h2>

               <div className="price-container">
                  <div className='product-price'>
                      <p>$</p>
                      <h2>{price}</h2>
                    </div>

                    <div className="discount">
                      <h6>{discountPercent}</h6>
                    </div>
               </div>

              <div className='previous-price-container'>
                  <span className="previous-price">${prevPrice}</span>
              </div>
{/* 
                <div className="wishlist">
                  <AiFillHeart />
                </div> */}

              <Counter id={id} />

             <Link to={`/product/${id}`}>
                  <div className='view'>
                      <button className='view-btn'>View Product Details</button>
                      <span><FaEye className='view-btn' /></span>
                  </div>
             </Link>
              
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Products