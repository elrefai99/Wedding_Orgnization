import { Request, Response, NextFunction } from "express"
import UserModel from "../../Models/User/User.model"

const getUserController = async (req: Request | any ,res: Response, next: NextFunction) => {
    try{
        const userID = req.user.id
        const get_user = await UserModel.findById(userID)
        res.status(200).json({status: "OK",message: "success", get_user})
        next()
    }catch(err){
        res.status(500).json({message: err})
    }
}
 
const UpdateUserProfileController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const userID = req.user.id;
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