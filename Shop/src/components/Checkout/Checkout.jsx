import React from 'react'
import { useSelector } from 'react-redux'
import { useTotal } from '../../App/hooks'
import data from '../../data'
import CheckoutItem from '../checkoutItem/CheckoutItem'
import './checkout.css'


const Checkout = () => {
  const cart = useSelector(state => state.counter.cart)
  const total = useTotal()
  return (
    <div className='checkout-container'>
      <h2>Your Order <small>(s)</small></h2>
      {cart.map(i => <CheckoutItem key={i.id} id={i.id} count={i.count}/>)}

      <p>Total: { total}</p>
    </div>
  )
}

export default Checkout