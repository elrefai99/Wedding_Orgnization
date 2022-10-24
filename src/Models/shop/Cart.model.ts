import { CartInterface } from './../../Interfaces/shop/Cart.d';
import { Schema, model } from "mongoose";
import { toJSON } from "../../Functions/Shop/toJSON.Cart";

const CartSchema = new Schema({
    user_id:{
        type: String,
        required: true,
    },
    products:[
        {
            productsId:{
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
            },
        }
    ]
}, {
    timestamps: true
})

CartSchema.methods.toJSON = toJSON;

const CartModel = model<CartInterface>('Cart', CartSchema)
export default CartModel