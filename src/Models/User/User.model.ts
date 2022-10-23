import { Schema, model } from "mongoose";
import UserInterface from "../../Interfaces/User/User";
import { toJSON } from "../../Functions/User/toJSON.User";

const adderssSchema = new Schema({
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
})

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        default: 'https://firebasestorage.googleapis.com/v0/b/animeview-60d78.appspot.com/o/user.jpeg?alt=media&token=2b11e16f-41a6-435d-afdc-f7f68615d2f7'
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: adderssSchema,

    isAdmin: {
        type: Boolean,
        default: false,
    },
    currentAmount: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    },
},{
    timestamps: true
})

UserSchema.methods.toJSON = toJSON;


const UserModel = model<UserInterface>('user', UserSchema)

export default UserModel