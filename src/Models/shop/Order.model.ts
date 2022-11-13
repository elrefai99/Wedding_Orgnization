import { Order } from './../../Interfaces/shop/Order'
import { Schema, model } from 'mongoose'
import { toJSON } from '../../Functions/Shop/toJSON.Order'

const OrderSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        amount: {
            type: Number,
            required: true,
        },
        address: {
            type: Object,
            required: true,
        },
        status: {
            type: String,
            default: 'up',
        },
    },
    {
        timestamps: true,
    },
)

OrderSchema.methods.toJSON = toJSON

const OrderModel = model<Order>('Order', OrderSchema)
export default OrderModel
