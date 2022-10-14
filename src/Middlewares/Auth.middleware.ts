import RequestAuthintication from "../Utils/Types/Auth";
import UserModel from "../Models/User/User.model";
import jwt from 'jsonwebtoken'
import { NextFunction, Response } from 'express';
import DataStord from "../Utils/Types/DataStord";

const verifyToken = async (req: RequestAuthintication | any, res: Response, next: NextFunction) => {
    const token = req.body.token || req.headers['token'];

    if(token){
        try{
            const token_secret = process.env.TokenSecret as string;

            const user_id = await jwt.verify(token, token_secret) as DataStord;
            const id = user_id._id ;
    
            const user = await UserModel.findById(id);
            if(user){
                req.user = user;
                next();
            }else{
                res.status(403).json("there was an error creating")
            }
        }catch(err){
            res.status(500).json({messageError: err});
        }
    }else{
        res.status(403).json('Authentication failed')
    }
}

export = verifyToken;