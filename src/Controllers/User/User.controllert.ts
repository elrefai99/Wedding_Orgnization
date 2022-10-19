import { Request, Response, NextFunction } from "express"
import UserModel from "../../Models/User/User.model"
import HallModel from "../../Models/Halls/Halls.model"
import CarsModel from "../../Models/Cars/cars.model"

const getUserController = async (req: Request | any ,res: Response, next: NextFunction) => {
    try{
        const userID = req.user.id || req.query.username
        const get_user = await UserModel.findById(userID)
        // Halls
        const UserHall = await HallModel.find({
            Owner: userID
        })
        //cars
        const UserCars = await CarsModel.find({
            Owner: userID
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

export {
    getUserController,
    UpdateUserProfileController
}