import { toJSON_Order } from '../../Interfaces/shop/Order'

export function toJSON(this: toJSON_Order) {
    const Order = this
    const OrderObject = Order.toObject()
    delete OrderObject.__v
    return OrderObject
}
