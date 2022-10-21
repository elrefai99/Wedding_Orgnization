import {createSlice} from '@reduxjs/toolkit'
import data from '../data'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cart.find(i => i.id === action.payload)
            if (item === undefined) {
                const c = data.filter((e) => e.id === action.payload)[0]
                console.log(c)
                const newItem = { id: action.payload, count: 1, price: c.price }
                state.cart.push(newItem)
            }
        },

        increment: (state, action) => {
            const itemId = state.cart.findIndex(i => i.id === action.payload)

            if(itemId  >= 0){
                state.cart[itemId].count += 1
            }
            
        },


        decrement: (state, action) => {

            const itemId = state.cart.findIndex(i => i.id === action.payload)

            if(itemId  >= 0){
                    state.cart[itemId].count -= 1
            }
            
        },


        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },

        clearCart: (state, action) => {
            state.cart = []
        },


    }
});

export const {increment, decrement, removeFromCart, addToCart, clearCart} = counterSlice.actions

export default counterSlice.reducer