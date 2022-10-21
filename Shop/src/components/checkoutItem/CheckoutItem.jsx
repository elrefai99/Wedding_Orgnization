import React from 'react'
import data from '../../data'
import './checkoutitem.css'


const CheckoutItem = ({id, count}) => {
    const item = data.find(e => e.id === id)
    const totalPrice = count * item.price;
    let currentPrice = 0;
    // currentPrice += totalPrice

  return (
      <>
        <section className='checkout-item-container'>
            <div>
                <img src={item.image} alt={item.title} className='checkout-image' />
            </div>

            <div className="details">
                <h2>{item.title}</h2>
            </div>

            <div className="counts">
                <p>Qty: {count}</p>
            </div>

            <div className="total">
                <p>Price: ${totalPrice}</p>
            </div>
        </section>
        <div className="thin-line"></div>
        {/* <h2>Total Price: </h2> */}
      </>
  )
}

export default CheckoutItem