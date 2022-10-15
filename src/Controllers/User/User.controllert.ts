import { Request, Response, NextFunction } from "express"
import UserModel from "../../Models/User/User.model"

const getUserController = async (req: Request | any ,res: Response, next: NextFunction) => {
    try{
        const userID = req.user.id
        const get_user = await UserModel.findById(userID)
        res.status(200).json(get_user)
        next()
    }catch(err){

    }
}

export {
    getUserController
}