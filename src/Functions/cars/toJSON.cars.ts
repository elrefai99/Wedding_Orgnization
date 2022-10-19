import { toJSON_Cars } from "../../Interfaces/Cars/cars";

export function toJSON (this: toJSON_Cars){
    const Car = this;
    const CarObject = Car.toObject();
    delete CarObject.__v;
    return CarObject;
}