import { Document } from 'mongoose'

interface Cars {
    owner: string
    car_Model: string
    CarType: string
    cost: string
    address: string
    image: Array
    phoneNumber: string
    description: string
}

export interface toJSON_Cars extends Cars, Document {
    toJSON: () => any // any for now
}

export default Cars
