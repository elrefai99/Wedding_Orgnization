import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../App/counterSlice'
import {FaShoppingBasket, FaTrashAlt} from 'react-icons/fa'
import CartItem from '../CartItem/CartItem'
import './cart.css'
import { Link } from 'react-router-dom'





const Cart = ({show}) => {

    const cart = useSelector((state) => state.counter.cart)
    if (show) {
        return (  
        <div className='cart-container' id='move'>
            <h4>Cart</h4>
            <div className="thin-line"></div>
            <div className='items-container'>
                {cart.length === 0 ?
                <p>Your cart is empty</p>
                : <CartList />
                }
            
        </div>
      </div> 
      )
 }
 return null
}

const CartList = () => {

    // const select = useSelector((state, action) => state.cart);

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.counter.cart)
    
    return (
        <>
          <div>
            {cart.map(item => <CartItem key={item.id} id={item.id} count={item.count} />)}

            <div className='btn-containers'>
                <div className='sub-con' onClick={() => dispatch(clearCart())}>
                    <button className='clear-btn'>Clear Cart</button>
                    <span><FaTrashAlt className='icon'/> </span>
                </div>

                <Link to='/checkout' className='sub-con'>
                        <button className='clear-btn'>Checkout</button>
                        <span><FaShoppingBasket className='icon'/> </span>
                </Link>
            </div>

         </div> 
        </>
    )
}

export default Cart