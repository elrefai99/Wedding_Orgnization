import { Request, Response, NextFunction } from "express"
import UserModel from "../../Models/User/User.model"
import HallModel from "../../Models/Halls/Halls.model"
import CarsModel from "../../Models/Cars/cars.model"
import Remove_New_User from "../../Functions/Emails/RemoveEmail.email"

const getUserController = async (req: Request | any ,res: Response, next: NextFunction) => {
    try{
        const userID = req.user.id
        const get_user = await UserModel.findById(userID)
        // Halls
        const UserHall = await HallModel.find({
            Owner: userID
        })
        //cars
        const UserCars = await CarsModel.find({
            owner: userID
        })
        res.status(200).json({status: "OK",message: "success", get_user, UserHall, UserCars})
        next()
    }catch(err){
        res.status(500).json({message: err})
    }
}

const UpdateUserProfileController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const userID = req.user.id || req.params.id || req.query.username;
        const new_data = await UserModel.findByIdAndUpdate(userID, {
            $set: req.body,
        })
        res.status(200).json({status: "OK", message: "success",new_data});
        next();
    }catch(err){
        res.status(500).json({message: err})
    }
}

// Add Save
const SaveTopicOfAllControllers = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const userID = req.user.id;
        const new_data = await UserModel.findByIdAndUpdate(userID, {
            Saved: req.body,
        })
        res.status(200).json({status: "OK", message: "success",new_data});
        next();
    }catch(err){
        res.status(500).json({message: err})
    }
}

const DeleteUserController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const userID = req.user.id;
        const new_data = await UserModel.findByIdAndDelete(userID)
        Remove_New_User(userID, req.user.username)
        res.status(200).json({status: "OK", message: "success",new_data});
        next();
    }catch(err){
        res.status(500).json({message: err})
    }
}

export {
    getUserController,
    UpdateUserProfileController,
    SaveTopicOfAllControllers,
    DeleteUserController
}