import { Schema, model } from "mongoose";
import { toJSON_Halls_Handel } from "../../Functions/Halls/toJSON.Halls";
import Halls from "../../Interfaces/Halls/Halls";

const PeopleSchema = new Schema({
    Max: {
        type: Number,
        default: 0,
    },
    Min: {
        type: Number,
        default: 0,
    }
})

const DateSchema = new Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    }
})

const TimeDayOrNightsSchema = new Schema({
    Day: {
        type: Boolean,
        default: false,
    },
    Night:{
        type: Boolean,
        default: false,
    }
})

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
    TimeDay:TimeDayOrNightsSchema,
    
    Date: DateSchema,

    cost_Per_Person: {
        type: Number,
        default: 0
    },
    People: PeopleSchema,

    Image: {
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
})

HallSchema.methods.toJSON = toJSON_Halls_Handel;

const HallModel = model<Halls>('hall', HallSchema)

export default HallModel;