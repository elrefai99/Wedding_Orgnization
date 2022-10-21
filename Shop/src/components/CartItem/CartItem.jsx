import React from 'react'
import data from '../../data'
import {FaTrashAlt} from 'react-icons/fa'
import './cartitem.css'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../App/counterSlice'






const CartItem = ({id, count}) => {


const res = data.find(e => e.id === id)
const dispatch = useDispatch()

// const price = res.price
// const amount = count

// const itemTotal = price * amount;


  return (
    <>
        <section className='cart-item'>
          <div>
            <img src={res.image} className='cart-item-img' />
          </div>

          <div>
            <p>{res.title}</p>
            <span>
                <small className='multiply'>${res.price}.00 x {count} </small>
                <span><b>${res.price * count}.00</b></span>
              </span>
          </div>

          <div className="trash">
            <button className='trash-btn' onClick={() => dispatch(removeFromCart(id))}>
                <FaTrashAlt className='trash-icon' />
            </button>
          </div>

        </section>
        <div className="thin-line"></div>

    </>
  )
}

export default CartItem
