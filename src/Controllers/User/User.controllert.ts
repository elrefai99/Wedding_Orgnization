import { Request, Response, NextFunction } from "express"

const getUserController = async (req: Request | any ,res: Response, next: NextFunction) => {
    try{
        const userID = req.user.id
        res.status(200).json(userID)
        next()
    }catch(err){

    }
}

export {
    getUserController
}