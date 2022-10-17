import { Document } from "mongoose";

interface Halls {
    _id: string;
    Owner: string;
    Hall_Name: string;
    phoneNumber: string;
    address: string;
    TimeDay: string;
    Date_From: number;
    Date_To: number;
    cost_Per_Person: number;
    max_People: number;
    max_People: number;
    Image: Array;
    description: string;
}

export interface toJSON_Halls extends Halls, Document{
    toJSON: () => any; // any for now
}

export default Halls;