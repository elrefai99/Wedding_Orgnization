import UserModel from './User.model'
import { Schema } from 'mongoose'

const OrgnizationSchema = new Schema({
    isHall: {
        type: Boolean,
        default: false,
    },
    isCars: {
        type: Boolean,
        default: false,
    },
    isClothes: {
        type: Boolean,
        default: false,
    },
})
const client = UserModel.discriminator('Orgnization', OrgnizationSchema)

export default client
