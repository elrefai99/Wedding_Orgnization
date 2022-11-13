import { toJSON_Cart } from './../../Interfaces/shop/Cart.d'

export function toJSON(this: toJSON_Cart) {
    const Cart = this
    const CartsObject = Cart.toObject()
    delete CartsObject.__v
    return CartsObject
}
