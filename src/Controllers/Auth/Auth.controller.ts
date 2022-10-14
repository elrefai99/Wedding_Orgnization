import { Request, Response, NextFunction } from "express";
import organization from '../../Models/User/organization'
import client from "../../Models/User/Client";
import UserModel from "../../Models/User/User.model";
import TokenCookie from "../../Functions/jwt/token.jwt";
import bcrypt from 'bcrypt'

const RegisterController = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const types = req.body.type as string;
        if(!(types === "cleint" || types === "organization"))
            res.status(403).json({status: "Not Found", message: "should select type"});
        
        const user_Data = req.body;

        // Hash Password
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        user_Data.password = password;

        // Handel Email
        const find_Email = await UserModel.findOne({ email: req.body.email });
        if(find_Email){
            res.status(403).json({status: 'Failed', message: 'Email already exists'});
        }else{
            if(types === "cleint"){

                const user = await new client(user_Data);
                const newUser = await user.save();
                res.status(200).json({status: "OK", message: "success", data: newUser});
    
            }else if(types === "organization"){
    
                const user = await new organization(user_Data)
                const newUser = await user.save();
                res.status(200).json({status: "OK", message: "success", data: newUser});
    
            }
        }

        next();
    }catch(err){
        res.status(500).json({message: err})
    }
}

const LoginController = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const find_Email = await UserModel.findOne({email: req.body.email});
        if(!find_Email){
            res.status(404).send({message: 'Email not found'});
        }
        const find_password = await bcrypt.compare(req.body.password, find_Email!.password);
        if(!find_password){
            res.status(404).send({message: 'Password is wrong'});
        }
        if(find_Email && find_password){
            // made Token by Id
            const token = TokenCookie(find_Email._id);
            find_Email.token = token;

            res.status(200).json({status: "OK",message: "success login", find_Email});
            next();
        }
    }catch(err){
        res.status(500).json({message: err})
    }
}

export {
    RegisterController,
    LoginController
}