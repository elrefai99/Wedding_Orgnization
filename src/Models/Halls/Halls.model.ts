import { Schema, model } from "mongoose";
import { toJSON_Halls_Handel } from "../../Functions/Halls/toJSON.Halls";
import Halls from "../../Interfaces/Halls/Halls";

const HallSchema = new Schema({
    Owner: {
        type: String,
        required: true,
    },
    Hall_Name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    TimeDay:{
        type: String,
        required: true,
    },
    Date_From: {
        type: String,
        required: true,
    },
    Date_To: {
        type: String,
        required: true,
    },
    cost_Per_Person: {
        type: Number,
        default: 0
    },
    max_People: {
        type: Number,
        default: 0
    },
    min_People: {
        type: Number,
        default: 0
    },
    Image: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

HallSchema.methods.toJSON = toJSON_Halls_Handel;

const HallModel = model<Halls>('hall', HallSchema)

export default HallModel;