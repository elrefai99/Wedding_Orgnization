import { Document } from "mongoose";

interface Halls {
    _id: string;
    Owner: string;
    Hall_Name: string;
    phoneNumber: string;
    address: string;
    TimeDay: {
        Day: string;
        Night: string;
    };
    Date: {
        From: string;
        to: string;
    }
    cost_Per_Person: number;
    people: {
        Max: number;
        min: number;
    }
    Image: Array;
    description: string;
}

export interface toJSON_Halls extends Halls, Document{
    toJSON: () => any; // any for now
}

export default Halls;