import CarsModel from "../../Models/Cars/cars.model";
import { Request, Response, NextFunction } from "express"

// Create
const createANewCarController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        // Get User Data
        const owner = req.user.id;
        const address = req.user.address.streetAddress + req.user.address.city + ', ' + req.user.address.country
        const phoneNumber = req.user.phoneNumber;

        const {car_Model ,CarType ,cost ,image ,description ,type} = req.body

        const NewCar = await new CarsModel({owner, phoneNumber, address, car_Model ,CarType ,cost ,image ,description ,type}).save();
        res.status(200).json(NewCar);
        next();
    }catch(err){
        res.status(500).json({message: err})
    }
}

export {
    createANewCarController
}