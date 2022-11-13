import UserModel from './User.model'
import { Schema } from 'mongoose'

const ClientSchema = new Schema({
    gender: {
        type: String,
        required: true,
    },
})
const client = UserModel.discriminator('Client', ClientSchema)

export default client
