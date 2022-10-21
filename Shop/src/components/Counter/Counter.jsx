import React, { useEffect, useState } from 'react'
import {AiFillHeart, AiOutlineShoppingCart, AiOutlineHeart, AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, addToCart, removeFromCart } from '../../App/counterSlice'
import './counter.css'

const Counter = ({id}) => {

    // const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch();

    const cart = useSelector(state => state.counter.cart);

    const [count, setCount] = useState(0)

    useEffect(() => {
      const itemId = cart.findIndex(item => item.id === id)
      if (itemId !== -1) {
        const _count = cart[itemId].count
        setCount(_count)
      } else {
        setCount(0)
      }
    }, [cart])

    const increaseBtn = () => {
        const item = cart.find(i => i.id === id)
        if (item === undefined){
            dispatch(addToCart(id))
        } else {
          dispatch(increment(id))
        }
    }

    const decreaseBtn = () => {
        const item = cart.find(i => i.id === id)

        if(item !== undefined){
          if (item.count <= 1) {
            dispatch(removeFromCart(item.id))
          } else {
            dispatch(decrement(id))
          }
        }
    }


 
  return (
    <>
        <div className="action-btns">
                <div className='actions'>
                    <button className='decrease-btn' onClick={decreaseBtn}>
                      <h2><AiOutlineMinus className='decrease-icon' /></h2>
                    </button>

                    <span>{count}</span>

                    <button className='increase-btn' onClick={increaseBtn}>
                      <h2><AiOutlinePlus className='increase-icon' /></h2>
                    </button>
                </div>

                 <div className='cart-btn-container'>
                    <button className='add-to-cart' onClick={() => dispatch(addToCart(id))}>
                          <span>Add to Cart</span>
                          <h2><AiOutlineShoppingCart/></h2>
                    </button>
                 </div>

              </div>
    </>
  )
}

export default Counter