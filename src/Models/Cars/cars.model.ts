import { Schema, model } from 'mongoose';
import CarsInterface from '../../Interfaces/Cars/cars';
import { toJSON } from '../../Functions/cars/toJSON.cars';

const carSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    car_Model: {
        type: String,
        required: true
    },
    CarType: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,  
    }
}, {
    timestamps: true,
})

carSchema.methods.toJSON = toJSON;
const CarsModel = model<CarsInterface>('cars', carSchema);
export default CarsModel;