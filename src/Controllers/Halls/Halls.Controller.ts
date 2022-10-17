import HallModel from "../../Models/Halls/Halls.model";
import { Request, Response, NextFunction } from "express"


// Create
const createHallsController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        // Get Owner Data form TokenCookie
        const owner_address = req.user.address.streetAddress + req.user.address.city + ', ' + req.user.address.country
        const owner_Id = req.user.id;
        const owner_phoneNumber = req.user.phoneNumber

        // Add to database
        const {Image, TimeDay, Date_From, Date_To, max_People, min_People, description, cost_Per_Person ,Hall_Name} = req.body
        const hall = await new HallModel({
            Date_From: Date_From, 
            Date_To: Date_To, 
            max_People: max_People, 
            min_People: min_People,
            TimeDay: TimeDay, 
            Image: Image, 
            cost_Per_Person: cost_Per_Person, 
            Hall_Name: Hall_Name, 
            description: description, 
            Owner: owner_Id, 
            phoneNumber: owner_phoneNumber, 
            address: owner_address
        });
        const newHalls = await hall.save()

        res.status(200).json({status: "OK", message: "success", newHalls})

        next();
    }catch(err){
        res.status(500).json({message: err});
    }
}

export {
    createHallsController
}