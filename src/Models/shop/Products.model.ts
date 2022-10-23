import { Schema, model } from "mongoose";
import { toJSON } from "../../Functions/Shop/toJSON.products";
import { Products } from "../../Interfaces/shop/Product";

const ProductsSchema = new Schema({
    Owner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        require: true
    },
    image: {
        type: Array,
        required: true,
    },
    catagory: {
        type: Array,
        
    },
    sizes: {
        type: String,
        required : true
    },
    collor: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true,
})

ProductsSchema.methods.toJSON = toJSON;

export const ProductModel = model<Products>('Product', ProductsSchema)