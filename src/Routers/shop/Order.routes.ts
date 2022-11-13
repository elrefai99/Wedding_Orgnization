import { Router } from 'express'
import verifyToken from '../../Middlewares/Auth.middleware'
import { createOrderController, getOrderController } from '../../Controllers/shop/Order.controller'
const router = Router()

// create Cart
router.post('/create/order', verifyToken, createOrderController)

// Get single page
router.get('/get/:username/order/:id', verifyToken, getOrderController)

// Delete Cart

export default router
