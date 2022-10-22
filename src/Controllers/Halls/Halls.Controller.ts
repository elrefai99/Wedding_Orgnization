import HallModel from "../../Models/Halls/Halls.model";
import { Request, Response, NextFunction, RequestHandler } from "express"


// Create
const createHallsController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const UserType = req.user.isHall
        if(UserType === true){
            // Get Owner Data form TokenCookie
            const address = req.user.address.streetAddress + req.user.address.city + ', ' + req.user.address.country
            const Owner = req.user.id;
            const phoneNumber = req.user.phoneNumber

            // Add to database
            const {Image, TimeDay, Date, People, description, cost_Per_Person ,Hall_Name, type} = req.body
            const hall = await new HallModel({
                Date, 
                People,
                TimeDay, 
                Image, 
                cost_Per_Person, 
                Hall_Name, 
                description, 
                Owner, 
                phoneNumber, 
                address,
                type
            });
            const newHalls = await hall.save()

            res.status(200).json({status: "OK", message: "success", newHalls})
        }

        next();
    }catch(err){
        res.status(500).json({message: err});
    }
}

const getSinglePageHallController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const hall_id = req.params.id;
        const findHall = await HallModel.findById(hall_id);
        res.status(200).json({status: "OK", message: "success", findHall})
        next();
    }catch(err){
        res.status(500).json({message: err})
    }
}

const getAllHallsController: RequestHandler = async ( _req: Request | any, res: Response, next: NextFunction) => {
    try{
        const getAllHalls = await HallModel.find();
            res.status(200).json(getAllHalls);
        next()
    }catch(err){
        res.status(500).json({message: err});
    }
}

const UpdateHallController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const hall_id = req.params.id;
        const update = await HallModel.findByIdAndUpdate(hall_id, {
            $set: req.body
        }); 

        res.status(200).json({success: "OK", message: "Update is success", update});
        next()
    }catch(err){
        res.status(500).json({message: err});
    }
}

const DeleteHallController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const hall_id = req.params.id;
        const delete_hall = await HallModel.findByIdAndDelete(hall_id); 

        res.status(200).json({success: "OK", message: "Delete is success", delete_hall});
        next()
    }catch(err){
        res.status(500).json({message: err});
    }
}

export {
    createHallsController,
    getSinglePageHallController,
    getAllHallsController,
    UpdateHallController,
    DeleteHallController
}