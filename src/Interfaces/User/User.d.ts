import { Document } from "mongoose";

interface UserInterface { 
    _id: string;
    fName: string;
    lName: string;
    fullName: string;
    email: string;
    password: string;
    avatarUrl: string;
    phoneNumber: string;
    address?: {
        streetAddress: string;
        city: string;
        country: string;
    }
    isAdmin: boolean;
    isHall: boolean;
    isCars: boolean;
    isClothes: boolean;
    token: string;
}

export interface toJSON_User extends UserInterface, Document{
    toJSON: () => any; // any for now
}

export default UserInterface;