import { Document } from "mongoose";

export interface Products {
    Owner: string;
    title: string;
    image: Array;
    catagory: Array;
    sizes: string;
    collor: string;
    price: number;
}

export interface toJSON_Products extends Products, Document{
    toJSON: () => any; // any for now
}