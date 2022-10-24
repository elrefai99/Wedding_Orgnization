import { Request, Response, NextFunction } from "express"
import OrderModel from '../../Models/shop/Order.model'
import Stripe from "stripe"
const getStripe = new Stripe(process.env.STRIPE_KEY as string,{
    apiVersion: "2022-08-01"
})

export const PostPaymentRequest = async (req: Request | any, res: Response, next: NextFunction) =>{
    try{
        const stripeRes = await getStripe.charges.create({
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        });

        //Change Current Amount of user
        req.user.currentAmount = req.user.currentAmount + stripeRes.amount / 100;
        await req.user.save();

        const transaction = new OrderModel({
            userId: req.user.id,
            amount: stripeRes.amount / 100,
            type: true,
            state: "Deposit to e-wallet",
        });
        await transaction.save();

        res.status(200).json({stripeRes, currencyAmount: req.user.currentAmount, transaction: transaction});
        next();
    }catch(err){
        res.status(500).json({message: err})
    }
}