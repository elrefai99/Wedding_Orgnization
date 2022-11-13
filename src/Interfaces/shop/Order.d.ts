import { Document } from 'mongoose'

export interface Order {
    userId: string
    products: Array
    amount: number
    address: Array
    status: string
}

export interface toJSON_Order extends Order, Document {
    toJSON: () => any // any for now
}
