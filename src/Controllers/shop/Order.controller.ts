import { Request, Response, NextFunction } from 'express'
import OrderModel from '../../Models/shop/Order.model'

const createOrderController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const order = await new OrderModel({ ...req.body, user_id: req.user.id })
        const saveorder = await order.save()
        res.status(200).json(saveorder)
        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
const getOrderController = async (req: Request | any, res: Response, next: NextFunction) => {
    try {
        const getId = req.params.id
        const cart = await OrderModel.findById(getId)
        res.status(200).json(cart)
        next()
    } catch (err) {
        res.status(500).json({ message: err })
    }
}
export { createOrderController, getOrderController }
