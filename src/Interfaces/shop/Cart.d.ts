import { Document } from 'mongoose'

export interface CartInterface {
    user_id: string
    products: [
        {
            products_id: string
            quantity: number
        },
    ]
}

export interface toJSON_Cart extends CartInterface, Document {
    toJSON: () => any // any for now
}
