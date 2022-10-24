import CartModel from '../../Models/shop/Cart.model'
import { Request, Response, NextFunction } from "express";

// Create Cart
const createCartController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const cart = await new CartModel({...req.body, user_id: req.user.id});
        const saveCart = await cart.save();
        res.status(200).json(saveCart);
        next();
    }catch(err){
        res.status(500).json({message: err});
    }
}

//Get
const getCartController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const getId = req.user.id;
        const cart = await CartModel.find({user_id: getId});
        res.status(200).json(cart);
        next();
    }catch(err){
        res.status(500).json({message: err});
    }
}

// Delete
const DeleteCartController = async (req: Request | any, res: Response, next: NextFunction) => {
    try{
        const cartId = req.params.id;
        const cart = await CartModel.findByIdAndDelete(cartId);
        res.status(200).json(cart);
        next();
    }catch(err){
        res.status(500).json({message: err});
    }
}

export {
    createCartController,
    getCartController,
    DeleteCartController
}